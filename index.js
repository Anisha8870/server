const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Root path
app.get('/', (req, res) => {
    res.send("Welcome");
});

// MongoDB Connection with Error Handling
mongoose.connect('mongodb+srv://anisha:anisha@anishar.xesp5.mongodb.net/Bank', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connected");

    app.listen(8080, () => {
        console.log("Server connected on port 8080");
    });
})
.catch(err => {
    console.error("DB Connection Error:", err);
});

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    amount: Number
});

const Data = mongoose.model("test", dataSchema);

app.get('/data', async (req, res) => {
    try {
        const items = await Data.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});
app.post('/create', async (req, res) => {
    try {
        const newItem = await Data.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error creating data", error });
    }
});
