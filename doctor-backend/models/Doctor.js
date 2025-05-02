const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  consultationMode: { type: String, enum: ["Online", "Offline", "Both"], required: true },
  fee: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  image: { type: String } // Optional field for image URL
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);
