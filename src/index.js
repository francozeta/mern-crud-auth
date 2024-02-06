import app from './app.js';
import { connectDB } from './db.js';

const PORT = 4000;

connectDB();
app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
