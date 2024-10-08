// import { places } from "../../../../lib/db.js";
import dbConnect from "@/db/models/connect.js";
import Place from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      if (!place) {
        return response.status(404).json({ status: "Not found" });
      }
      return response.status(200).json(place);
    } catch (error) {
      return response.status(500).json({ error: "Error fetching place" });
    }
  }
}
