import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.js';

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/gigih_midterm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB!');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
});


// use router
app.use('/', router);

app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
