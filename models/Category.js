import { model, Types, Schema } from 'mongoose';

const collection = 'categories';
const categorySchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    hover: { type: String, required: true },
    description: { type: String, required: true },
    cover_photo: { type: String, required: true },
    character_photo: { type: String, required: true },
    admin_id: { type: Types.ObjectId, ref: 'users', required: true }

}, {
    timestamps: true
})

const Category = model(collection, categorySchema);
export default Category;