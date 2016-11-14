from requests_toolbelt.multipart.encoder import MultipartEncoder
import requests

url = "http://test1.tablefarm.co.uk/urbanfarming/api/postLatestGameData/"

fields={'score1': "1",
        "hello": "world"
        }



r = requests.post(url,data={"score1": "1"} )



print(r.text)
# print(r)
