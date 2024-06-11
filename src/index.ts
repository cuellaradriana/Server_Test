import 'dotenv/config';
import express, { Request, Response } from 'express';
import axios from 'axios';
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const API_URL =
    process.env.API_URL || 'https://jsonplaceholder.typicode.com/users';

const server = express();
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

server.get('/soyTA', async (req: Request, res: Response) => {
    try {
        const response = await axios(API_URL);
        res.status(200).json(response.data);
    } catch (error: any) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
