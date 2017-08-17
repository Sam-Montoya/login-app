const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = [{
    userName: 'admin',
    userPassword: 'password'
}];

app.post('/login', ( request, response ) =>{
    if(request.body){
        if(request.body.userName === data[0].userName && request.body.userPassword === data[0].userPassword){
            response.status(200).send(true);
        }else{
            response.send(false);
        }
    }
});

app.listen(3030, console.log('Server is running on port 3030 dicchead'));