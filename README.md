# bootcamp-backend
## This is backend application for Udemy Like Bootcamp courses listing Web App.
## For Backend have below technology used : 
1. Node js 
2. Express.js 
3. MongoDB
4. Mongoose
5. Heroku for Deployment. Application deployed on : https://stark-dusk-95651.herokuapp.com/

```
GET https://stark-dusk-95651.herokuapp.com/api/v1/bootcamps/
POST https://stark-dusk-95651.herokuapp.com/api/v1/bootcamps/
DELETE https://stark-dusk-95651.herokuapp.com/api/v1/bootcamps/id
PUT  https://stark-dusk-95651.herokuapp.com/api/v1/bootcamps/id
```


## To run this application follow below steps : 
1. Clone this repo to local
2. Install dependencies by running below command

```
npm install
```
3. create a new file name .env in root directory
4. Enter below to properties to that file

```js
PORT=<PORT_NUMBER>  //PORT=3001
DATABASE_CONNECTION=mongodb+srv://<USER-NAME>:<PASSWORD>-Divesh@cluster0.htjup.mongodb.net/bootcamp?retryWrites=true&w=majority
```
5. After that application is ready to run. Just run it by running below command : 

```
node server.js
```