import mongoose from "mongoose";

const { Schema } = mongoose;

const ucapanSchema = new Schema(
  {
    nama: { type: String, required: true },
    message: { type: String, required: true, maxLength: 200 },
  },
  { timestamps: true }
);

export default mongoose.models.Ucapan || mongoose.model("Ucapan", ucapanSchema);
