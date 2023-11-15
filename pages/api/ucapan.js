import dbConnect from "../../utils/mongo";
import Ucapan from "../../model/Ucapan";

export default async function handler(req, res) {
  const { method } = req;
  const { nama, message } = req.body;

  await dbConnect();

  if (method === "GET") {
    try {
      const ucapan = await Ucapan.find();
      res.status(200).json(ucapan);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    if (
      !nama ||
      nama.trim().length === 0 ||
      !message ||
      message.trim().length === 0 ||
      message.trim().length > 200
    ) {
      return;
    }

    try {
      const ucapan = await Ucapan.create(req.body);
      res.status(201).json(ucapan);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
