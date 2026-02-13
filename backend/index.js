// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware (The "Waiter's Pad")
app.use(express.json()); // Allows us to read JSON data sent from React
app.use(cors()); // Allows React to talk to this server

// 1. CONNECT TO MONGODB
// REPLACE <password> with your actual password!
const MONGO_URI = "mongodb+srv://rshashidha502_db_user:hEBuNOM3OQuhMoAd@users.xvqcfsc.mongodb.net/?appName=Users";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ Connection Error:", err));


const pasteSchema = new mongoose.Schema({
    title: String,
    content: String,
    language: { type: String, default: "javascript" },
    createdAt: { type: Date, default: Date.now }
});

const Paste = mongoose.model('Paste', pasteSchema);


app.get('/pastes', async (req, res) => {
    const allPastes = await Paste.find();
    res.json(allPastes);
});

// POST: Create a new paste
app.post('/pastes', async (req, res) => {
    const { title, content, language } = req.body;
    const newPaste = new Paste({ title, content, language });
    await newPaste.save(); // Save to DB
    res.json(newPaste);
});

// DELETE: Remove a paste
app.delete('/pastes/:id', async (req, res) => {
    await Paste.findByIdAndDelete(req.params.id);
    res.json({ message: "Paste deleted" });
});

// UPDATE: Edit a paste
app.put('/pastes/:id', async (req, res) => {
    const { title, content } = req.body;
    const updatedPaste = await Paste.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(updatedPaste);
});

// Start the Server
app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});