import mongoose from "mongoose";
const {Schema, model} = mongoose;

const addressSchema = new Schema({
    street: String,
    number: Number,
    city: String
})

const authorSchema = new Schema({
    address: addressSchema,
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    bio: String,
    Image_path: URL,
    famous_for: String
})

const Author = model('Author', authorSchema)

export default Author;