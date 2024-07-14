import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  tgID: { type: Number, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
  timer: { type: Date, default: null },
  adsTimer: { type: Date, default: null },
  tonAddress: { type: String, default: null },
  twitch: { type: Object, default: {} },
  referrals: { type: Array, default: [] },
  completedTasks: { type: [Number], default: [] },
});

export const User = mongoose.model("User", userSchema);
