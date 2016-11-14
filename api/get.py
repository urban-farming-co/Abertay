import requests


url = "http://test1.tablefarm.co.uk/urbanfarming/api/getUserPlantDetails/"
url = "http://test1.tablefarm.co.uk/urbanfarming/api/getUserPlantDetails/"

fields={'score1': "1",
        "hello": "world"
        }



r = requests.get(url)



print(r.text)
# print(r)
