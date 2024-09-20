// import { places } from "../../../lib/db";
import Place from "@/db/models/Places";
import dbConnect from "@/db/models/connect.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(500).json({ message: "Error fetching places" });
    }
  }

  if (request.method === "POST") {
    console.log("incoming", request.body);
    try {
      const placeData = request.body;
      await Place.create(placeData);
      response.status(201).json({ message: "Place created" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
