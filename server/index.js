import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://neezas03:MA3Pqz7iD2DiEG5h@pulsecheck1.mmpyupd.mongodb.net/?retryWrites=true&w=majority&appName=PulseCheck1";
const client = new MongoClient(uri);

async function startServer() {
    try {
        await client.connect(); // << connect once here
        console.log('✅ Connected to MongoDB');

        app.post('/api/submit', async (req, res) => {
            try {
                const { mood, sleep, time } = req.body;
                const db = client.db('shiftpulse');
                const collection = db.collection('checkins');

                await collection.insertOne({ mood, sleep, time });

                res.status(200).json({ message: 'Check-in saved!' });
            } catch (error) {
                console.error('❌ Error inserting:', error);
                res.status(500).json({ message: 'Error saving check-in.' });
            }
        });

        app.listen(port, () => {
            console.log(`🚀 Server running on http://localhost:${port}`);
        });

    } catch (err) {
        console.error('❌ Failed to connect to MongoDB', err);
        process.exit(1); // stop server if cannot connect
    }
}

startServer();
