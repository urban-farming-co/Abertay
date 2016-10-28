# abertay
Shared Code between us and them.


## How to access our data
I don't know what technologies you're using, so I'll tell you how I do it. Both instructions certainly work on the linux commandline.
---
node js
---
I made a little node program that lists the tables - obviously you can edit it. This will load the connection string from the VCAP_SERVICES file, the index.js file will make a connection to the database - query it for the tables and then send them to the browser in a list.

• git clone https://github.com/kazzacarrot/abertay  
• cd abertay  
• npm install                      // to install the npm packages specified in package.json  
• npm start                        // to run the code  node index.js will also do the trick  
• firefox localhost:8000     // open localhost:8000 in a browser.  


---
psql postgres commandline tool
---
• psql -d postgres://bxxxdrcy:CusgDp8CGYvi4lu56rDDLuRWcF46PZiv@qdjjtnkv.db.elephantsql.com:5432/bxxxdrcy  
• set search_path to urbanfarming,public;   // so the psql program looks in the right place. *note* urbanfarming <comma> public  
• \dt      

# Quick note about the database
I'm currently changing the schema. It won't change much. 
Key tables: Urbanfarming.livedateyo and urbanfarming.processeddata
Key tables soon: Urbanfarming.livedata, urbanfarming.processeddata, Urbanfarming.users and urbanfarming.plantprojects


## Basic image process / pheno typing
I've supplied some quick image processing that will find the plant within the image based on green pixels.  

  other ways of finding the plant are -   
  1. using a depth map from stereo cameras and removing any pixels that are further away than the plant can be.  
  2. using a completly plane background, finding those pixels and ignoring them.
