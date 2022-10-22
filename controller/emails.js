import clientPromise from "../lib/mongodb";

export async function getMessages(req, res) {
    try {
        const client = await clientPromise;
        const db = await client.db('emails').collection("messages").find({}).toArray();

        res.json(db);

    } catch (error) {
        console.log(error);
    }
}

export async function postMessages(req, res) {
    try {
        const message = req.body;
        const client = await clientPromise;
        const db = await client.db('emails').collection("messages");

        const result = await db.insertOne(message)

        res.json(result);

    } catch (error) {
        console.log(error);
    }
}