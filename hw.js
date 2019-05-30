let express = require('express');

let app = express();
let port = 3000;

// app.get('/cats', (req, res)=>{

//     res.send('Meow')

// })

// app.get('/dogs', (req, res)=>{
    
//     res.send('Woof') 

// })

// app.get('/cats_and_dogs', (req,res) => {

//     res.send('Meow and Woof')
// })

// app.get('/greet/Kennedy', (req,res) => {

//         res.send('Hello, Kennedy!')
//     })

// app.get('/greet/Jamison', (req,res) => {

//     res.send('Hello, Jamison!')
// })

// app.get('/greet/Manny', (req,res) => {

//     res.send('Hello, Manny!')
// })

app.get('/hello1', function(req, res){

    var age = req.query.age || '1987';
    res.send('You were born in ' + age + "!");


})

app.listen(3000, ()=>{

    console.log(`listening on port: ${port}`)


})