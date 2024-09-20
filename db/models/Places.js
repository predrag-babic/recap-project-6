import mongoose from "mongoose";
import "./Review";
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Places = mongoose.models.Places || mongoose.model("Place", placeSchema);

export default Places;
