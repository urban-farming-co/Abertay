import requests
import ast


url = "http://test1.tablefarm.co.uk/urbanfarming/api/getUserPlantDetails/"


r = requests.get(url)


s = ast.literal_eval(r.text)
k = s.keys()
print(s[k[0]])

print(s)
print("---")
print(r.text)
