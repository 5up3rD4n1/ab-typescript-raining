"""CE compare Files Script"""
import os
import configparser
import argparse
import re

# Third Party Imports
from datetime import datetime


class ConfigReader:
    """Read the config.ini File and each of its sections"""

    def __init__(self, file):
        self.file = file
        self.config_ini = configparser.ConfigParser()
        self.current_projects = {}

    def read_config(self):
        """Read the config.ini File and each of its sections"""
        config_ini = configparser.ConfigParser()
        try:
            config_ini.read(self.file)
        except configparser.Error as e:
            raise ValueError('Error reading the config file: ') from e
        if not config_ini.sections():
            raise ValueError('Config file is empty or has the wrong format.')
        current_projects = {}
        for section in config_ini.sections():
            required_options = [
                'System_list', 'expected_falues', 'pip_freeze_gold'
            ]
            for option in required_options:
                if option not in config_ini[section]:
                    raise ValueError(
                        f"Missing '{option}' in section '{section}' of the config file."
                    )
                value = config_ini.get(section, option).strip()
                if not value:
                    raise ValueError(
                        f"The '{option}' in '{section}' is empty or contains only whitespace."
                    )
                if not os.path.exists(value):
                    raise ValueError(
                        f"The '{option}' path in '{section}' does not exist: {value}"
                    )
            systems_file = config_ini.get(section, 'system_list').strip()
            golden_file = config_ini.get(section, 'expected_falues').strip()
            pip_freeze_req = config_ini.get(section, 'pip_freeze_gold').strip()
            current_projects[section] = (systems_file, golden_file,
                                         pip_freeze_req)
        return current_projects


class FileCompare:
    """Compare the golden and pip freeze golden file with the 2 files fetched from each host"""

    def __init__(self, systems, golden, pip_freeze_gold, logs):
        self.systems = systems
        self.golden = golden
        self.pip_freeze_gold = pip_freeze_gold
        self.logs = logs
        self.path = r'\\amr.corp.intel.com\ec\proj\mpe\systemqnr\bootstrap\Systems'
        self.pattern = re.compile(r'^(\S+)==([\w\.-]+)$')

    def compare_files(self):
        """Reads the pip Freeze Golden File and verifies that the format is always:
        package_name==version_number / IE- aardvark-py==5.40."""

        golden_values = configparser.ConfigParser()
        init_file = configparser.ConfigParser()
        pip_freeze_gold_values = self._read_pip_freeze_gold()

        with open(self.logs, 'a', encoding='utf-8') as log:
            golden_values.read(self.golden)
            project = os.path.basename(os.path.dirname(self.golden))
            for system in self.systems:
                inifile = os.path.join(self.path, system, 'Status.ini')
                pipfile = os.path.join(self.path, system, 'pip_freeze.ini')
                try:
                    pip_freeze_current_values = self._read_pip_freeze_current(
                        pipfile)
                    init_file.read(inifile)
                    self._compare_ini_files(golden_values, init_file, project,
                                            system, log)
                    self._compare_pip_freeze_files(pip_freeze_gold_values,
                                                   pip_freeze_current_values,
                                                   project, system, log)
                except ImportError as e:
                    print(f"{system} Error reading file: {e}")

    def _read_pip_freeze_gold(self):
        pip_freeze_gold_values = {}
        with open(self.pip_freeze_gold, 'r', encoding='utf-8') as file:
            for line in file:
                package = self.pattern.search(
                    line.strip())  #Search the groups captured in the RE.
                if package:
                    package_name, version = package.groups()
                    pip_freeze_gold_values[package_name] = version
        return pip_freeze_gold_values

    def _read_pip_freeze_current(self, pipfile):
        pip_freeze_current_values = {}
        with open(pipfile, 'r', encoding='utf-8') as file:
            for line in file:
                package = self.pattern.search(line.strip())
                if package:
                    package_name, version = package.groups()
                    pip_freeze_current_values[package_name] = version
        return pip_freeze_current_values

    def _compare_ini_files(self, golden_values, init_file, project, system,
                           log):
        for section in golden_values.sections():
            for key, value in golden_values.items(section):
                try:
                    if value != init_file.get(section, key, fallback=''):
                        log_entry = f"{project}, {datetime.now().strftime('%m/%d/%Y %H:%M:%S')}, {system}, {key} mismatch, Expected: {value}, Current Version: {init_file.get(section, key)}\n"
                        log.write(log_entry)
                        print(log_entry.strip())
                except configparser.NoSectionError as e:
                    log_entry = f"{project}, {system}, {key} mismatch, Missing section: {e}\n"
                    log.write(log_entry)
                    print(log_entry.strip())

    def _compare_pip_freeze_files(self, pip_freeze_gold_values,
                                  pip_freeze_current_values, project, system,
                                  log):
        for package_name, expected_version in pip_freeze_gold_values.items():
            actual_version = pip_freeze_current_values.get(package_name)
            if actual_version is None:
                log_entry = f"{project}, {datetime.now().strftime('%m/%d/%Y %H:%M:%S')}, {system}, {package_name} mismatch, Package not found\n"
            elif actual_version != expected_version:
                log_entry = f"{project}, {datetime.now().strftime('%m/%d/%Y %H:%M:%S')}, {system}, {package_name} mismatch, Expected: {expected_version}, Current: {actual_version}\n"
            else:
                continue
            log.write(log_entry)
            print(log_entry.strip())


def main():
    """Parses the arguments to executo the script"""

    parser = argparse.ArgumentParser(
        description=
        'Compare the status and pipFreeze files of the experiments listed in the config.ini file'
    )
    parser.add_argument(
        'config_file',
        help=
        'Path to the config.ini file with the list of all the current experiments.'
    )
    parser.add_argument('log_file',
                        nargs='?',
                        default='log.txt',
                        help='Path to the log file (default: log.txt)')

    args = parser.parse_args()

    config_reader = ConfigReader(args.config_file)
    projects = config_reader.read_config()

    for project_name, (systems_file, golden_file,
                       pip_freeze_gold) in projects.items():
        if not os.path.exists(args.log_file):
            with open(args.log_file, 'w', encoding='utf-8') as log1:
                log_entry1 = 'Project, DateTime, Host, Package, Expected, Current\n'
                log1.write(log_entry1)
        with open(systems_file, 'r', encoding='utf-8') as f:
            systems_list = [line.strip() for line in f if line.strip()]
        if not systems_list:
            print(
                f'Error: The systems list for {project_name} is empty or contains only blank lines.'
            )
        compare_files = FileCompare(systems_list, golden_file, pip_freeze_gold,
                                    args.log_file)
        compare_files.compare_files()


if __name__ == "__main__":
    main()
