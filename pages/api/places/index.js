// import { places } from "../../../lib/db";
import Places from "@/db/models/Places";
import dbConnect from "@/db/models/connect.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Places.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(500).json({ message: "Error fetching places" });
    }
  }
}
