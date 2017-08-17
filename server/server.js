const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const data = [{
    userName: 'admin',
    userPassword: 'password'
}];

app.post('/login', ( request, response ) =>{
    if(request.body){
        if(request.body.userName === data[0].userName && request.body.userPassword === data[0].userPassword){
            response.status(200).send(true);
        }else{
            var worngInfo;
            if(request.body.userName !== data[0].userName && request.body.userPassword === data[0].userPassword)
                wrongInfo = 'Username is incorrect.';
            else if(request.body.userPassword !== data[0].userPassword && request.body.userName === data[0].userName)
                wrongInfo = 'Password is incorrect.';
            else
                wrongInfo = 'Username and Password are incorrect.';
            response.send(wrongInfo);
        }
    }
});

app.post('/createUser', ( request, response ) => {
    const { userName, userPassword } = request.body;
    console.log(userName, userPassword);
});

app.listen(3030, console.log('Server is running on port 3030'));