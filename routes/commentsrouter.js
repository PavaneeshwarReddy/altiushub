const express  = require("express");
const blogModel = require("../models/PostModel");
const CommentRouter = express.Router();

CommentRouter.post("/postcomment:id",(request,response)=>{
    const blogId = request.params.id;
    const {content,author} = express.request.body;
    try {
        const commentsData = blogModel.find({"_id":blogId});
        const updatedData = blogModel.update({"_id":blogId},{comments:[...commentsData,{content,author}]});
        response.status(200).json({"Message":"commented"});
    } 
    catch(error) {
        response.status(500).json({"message":"unable to process request",error});
    }
})



module.exports = CommentRouter;