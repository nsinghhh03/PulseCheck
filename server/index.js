import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Replace with your MongoDB Atlas connection string!
const uri = "mongodb+srv://neezas03:MA3Pqz7iD2DiEG5h@pulsecheck1.mmpyupd.mongodb.net/?retryWrites=true&w=majority&appName=PulseCheck1";


const client = new MongoClient(uri);

app.post('/api/submit', async (req, res) => {
    try {
        const { mood, sleep, time } = req.body;
        const db = client.db('shiftpulse');
        const collection = db.collection('checkins');

        await collection.insertOne({ mood, sleep, time });

        res.status(200).json({ message: 'Check-in saved!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving check-in.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
