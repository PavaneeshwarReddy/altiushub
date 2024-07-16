const express = require("express");
const BlogRouter = express.Router();
const blogModel = require("../models/PostModel");
const { findBlog } = require("../controllers/postControllers");



// get all posts
BlogRouter.get("/allposts", (request, response) => {
    const body = request.body;
    try {
        const data = blogModel.find();
        response.status(200).json({ data: body });
    }
    catch(error) {
        response.status(500).json({ "message":"unavle to process the request"});
    }
})


// create new post 
/*

{
title,
author,
body,
draft
}


*/
BlogRouter.post("/createpost", (request, response) => {
    const { title, author, body, draft } = request.body;
    try {
        const data = blogModel.create({
            title, author, body, draft,
            comments: []
        })
        response.status(200).json({ data: data });
    }
    catch (error) {
        response.status(404).json({ "message": "Unable to process your request, try again", error })
    }
})


/*

Delete post 

*/
BlogRouter.delete("/deletepost:blog_id", (request, response) => {
    const blogId = request.params.blog_id
    try {
        const blogData = findBlog(blogId);
        if (!data) {
            response.status(404).json({ "message": "Requestest blog not found" })
        }

        const data = blogModel.deleteOne({ '_id': blogId });
        response.status(200).json({ "message": "Deleted post succesfull" })

    }
    catch (error) {
        response.status(501).json({ "message": "Unable to process your request", error });
    }
})


/*
Updating content and title

{
title,
body
}

*/
BlogRouter.put("/updatepost:blog_id", (request, response) => {
    const blogId = request.params.blog_id;
    const {title,body} = request.body;
    try {
        const blogData = blogModel.find({ '_id': blogId });
        if (!data) {
            response.status(404).json({ "message": "Requestest blog not found" })
        }

        const data = blogModel.findOneAndUpdate({ "_id":blogId},{title,body});
        response.status(200).json({ "message": "Updated post succesfull" })

    }
    catch (error) {
        response.status(501).json({ "message": "Unable to process your request", error });
    }
})







module.exports = BlogRouter;