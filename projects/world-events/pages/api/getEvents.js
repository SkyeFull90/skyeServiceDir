import clientPromise from "@/libs/mongodb";

export default async (req, res) =>{
    try {
        const client = await clientPromise;
        const db = client.db("events");

        const events = await db.collection("events_categories").find({}).limit(20).toArray();

       res.json(events);
    } catch (e) {
        console.error(e)
    }
}