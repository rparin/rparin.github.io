import os
import subprocess

file = os.getcwd() + '\\run\\run.bat'
p = subprocess.Popen(file, creationflags=subprocess.CREATE_NEW_CONSOLE)
