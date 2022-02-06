import pyautogui
import time

message = "I LOVE YOU"
n = 100

time.sleep(2)

for i in range(n):
	pyautogui.typewrite(message +"\n")
