// Part #1 Point 1 - npm installation
const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');  //// Part #1 Point 2
const mongoose=require('mongoose');

const nav= [         //Part #2 Point 6 
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');  //Part #1 Point 3 homerouter filename changed
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

 const app = new express(); 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 


 

app.get('/',cors(),function(req,res){    //Part #2 Point 7

    res.render('index',{ 
        nav:[{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'}]
    
    })});





app.listen(3000,()=>{   // Part #1 Point 5 Port number changed
    console.log("Server Ready on 3000");
});