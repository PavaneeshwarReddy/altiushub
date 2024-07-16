const express = require("express");
const mongoose = require('mongoose');
const BlogRouter = require("./routes/blogrouter");
const CommentRouter = require("./routes/commentsrouter");


const app = express();


app.use(express.json())
app.use(BlogRouter);
app.use(CommentRouter)

app.get("/",(request,response)=>{
    response.status(404).json({message:"No matching route found"});
})


// connected using docker
mongoose.connect('mongodb://root:example@mongo:27017/')
.then(()=>{
    console.log("Mongodb connected succesfully using docker")
})

app.listen(3000,()=>console.log("server started"));