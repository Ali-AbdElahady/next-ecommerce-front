import mongoose from "mongoose";
import clientPromise from "./mongodb";

mongoose.Promise = clientPromise;

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri);
  }
}