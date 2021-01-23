const express = require('express');
const app = express();
const port = process.env.PORT || 2030;
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add New Book'
    },
    {
        link:'/addauthor',name:'Add New Author'
    }
];
const nav1=[
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Sign Up'
    }
];


const signupRouter=require('./src/routes/signupRouter')(nav1)
const loginRouter=require('./src/routes/loginRouter')(nav1)
const homeRouter=require('./src/routes/homeRouter')(nav)
const booksRouter=require('./src/routes/bookRouter')(nav)
const authorsRouter=require('./src/routes/authorRouter')(nav)
const addbookRouter=require('./src/routes/addbookRouter')(nav)
const addauthorRouter=require('./src/routes/addauthorRouter')(nav)
const updatebookformRouter = require('./src/routes/updatebookformRouter')(nav);
const updateauthorformRouter = require('./src/routes/updateauthorformRouter')(nav);

app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/home',homeRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/updatebookform', updatebookformRouter);
app.use('/updateauthorform', updateauthorformRouter);


app.get('/',function(req,res){
    res.render("index",
    {
        nav1,
        title:'Library'
    });
});
app.listen(port);