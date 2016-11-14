# from requests_toolbelt.multipart.encoder import MultipartEncoder
import requests
# import ast

url = "http://test1.tablefarm.co.uk/urbanfarming/api/postLatestGameData/"

fields={'score1': "1",
        "hello": "world"
        }



r = requests.post(url,data={"score1": "1"} )



print(r.text)
# print(r)
print("---")
# s = ast.literal_eval(r.text)
# print(s) saddly, I'm a tool and right now, this url doesn't return a json. :/

