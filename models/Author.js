import { model, Types, Schema } from 'mongoose';

const collection = 'authors';
const authorSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date },
    photo: { type: String, required: true },
    user_id: {
        type: Types.ObjectId, ref: 'users', required: true
    },
    active: { type: Boolean, required: true }
}, {
    timestamps: true
});

const Author = model(collection, authorSchema);
export default Author;
