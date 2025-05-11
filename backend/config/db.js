import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tomatoproject:33858627@cluster0.mnjervc.mongodb.net/tomato"
    )
    .then(() => console.log("DB Connected"));
};
