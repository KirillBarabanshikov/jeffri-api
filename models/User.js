import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  tgID: { type: Number, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
  timer: { type: Date },
  adsTimer: { type: Date },
  tonAddress: { type: String },
});

export const User = mongoose.model("User", userSchema);
