# EqaimBlogs
This is a small blog posting website which enables users to post their contents.
Frontend part is done using react js and image upload part is done using cloudenary services


### Setup:
***
intial setup:
<ol>
<li>Download zip file and open in code editor and move to client folder using command: cd client in terminal</li>
<li>Install node_modules using command:npm install</li>
<li>Do the same for server folder also move to server folder and install node modules with same command</li>
</ol>

***
Configuring .env file:
 <ol>
  <li>There should be .env file in server folder containing two env variables-'MONGO_CONNECTION_ID' & 'PORT'</li>
  <li>Name of env file should be '.env' and should be on the root folder of server along with index.js</li>
  <li>'MONGO_CONNECTION_ID' - this should contain mongodb connection link( eg : MONGO_CONNECTION_ID =  link )</li>
  <li>'PORT' - this should be set to 5000( PORT = 5000 ),as the axios is connected to localhost:5000/ in  frontend</li>
 
</ol>

***
Starting client and server :
<ol>
<li>Move to client folder and type:npm start</li>
<li>In another terminal running parallelly move to server folder and type:npm start </li>
</ol>

***
This above mentioned steps will help you successfully run the blog website locally



