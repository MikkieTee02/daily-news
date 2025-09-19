import mongoose from "mongoose";

const {Schema} = mongoose
const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },

    description:{
        type:String,
        required:true,
    },


    imageUrl:{
        type:String,
        required:true,
    },

}, {timestamps:true});

export default mongoose.models.post || mongoose.model("post", postSchema);

//  const post = mongoose.model("post", postSchema)

//  export default post