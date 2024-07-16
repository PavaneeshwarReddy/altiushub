import blogModel from "../models/PostModel"


export const findBlog = (id)=>{
    const data = blogModel.find({ '_id': blogId });
    return data;
}


