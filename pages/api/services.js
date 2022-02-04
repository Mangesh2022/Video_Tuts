import {connectToDatabase} from "../../utils/mongodb";

export default async (req, res) => {
  const {db} = await connectToDatabase();

  const services = await db.collection("carddata").find({}).toArray();

  console.log("API executed... Data Fetched: ", services.length);
  // .sort({ metacritic: -1 })
  // .limit(20)
  // .toArray();

  res.json(services);
};
