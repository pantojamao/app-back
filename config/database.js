import mongoose from "mongoose";
let link = process.env.MONGO_URI;
mongoose.connect(link).then(() =>
    console.log("Database conneted")
).catch(error => console.error(error)
)
