const exp=require('express');
const app=exp();
const path=require('path');

app.set('view engine','hbs');
app.use(exp.json());
app.use(exp.urlencoded({extended:false}));
const port=3000||process.env.PORT;

app.get('/',(req,res)=>{
    //res.send('hello world');
    //res.sendFile(__dirname+'/index.html');

    res.render('index',{
        title:'hello world',
        aa:"vaibhav"
    });

});
app.get('/login',(req,res)=>{
    //res.send('hello world');
    //res.sendFile(__dirname+'/index.html');

    res.render('login',{
        title:'hello world',
        aa:"vaibhav"
    });

});
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Username: " + username);
    console.log("Password: " + password);
    res.send("Data received");
});

app.post("/dashboard", (req, res) =>{
    res.render('dashboard'));
}
    // const username = req.body.username;
    // const password = req.body.password;
    // console.log("Username: " + username);
    // console.log("Password: " + password);



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
