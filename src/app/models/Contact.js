// src/app/models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Avoid model overwrite error
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
