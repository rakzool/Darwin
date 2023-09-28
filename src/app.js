const express = require('express');
const dotenv = require('dotenv');

const users = require('./routes/users/users');


const app = express();

dotenv.config();
app.use(express());
app.use(express.json());
app.use("/users",users);

const port = process.env.PORT||8080;

app.get("/",(req,res) =>{
    res.send("<h1>Hello World</h1>");
    res.end();
});


app.listen(port,()=>{
   console.log(`listening 👂 on port ${process.env.PORT} ....`);
})
