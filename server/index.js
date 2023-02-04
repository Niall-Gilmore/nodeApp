const express = require('express')
const app = express()
const port = 4000
const mysql_connector = require('mysql');
const coach = require('../routes/coach');

const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const connection = mysql_connector.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phpmyadmin',
})


app.get('/allExercises', (req, res) => {
  connection.connect();
  connection.query("select * from exercise", function(error, results){
    console.log(error)
    console.log("query response is ", results);
    res.json(results);
  })
  connection.end();
})

app.post('/api/create', (req,res)=> {

  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;
  
  connection.connect();
  
  connection.query("INSERT INTO users (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
     if(err) {
     console.log(err)
     } 
     console.log(result)
  });   })

app.use('/coach', coach);  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



