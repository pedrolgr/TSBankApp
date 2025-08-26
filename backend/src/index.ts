import express from "express";
import cors from 'cors';
import { AppDataSource } from "./data-source.ts";
import type { Request, Response, NextFunction } from 'express';
import routes from "./routes/routes.ts";

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(routes);

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        res.status(400).json({ message: err.message });
    });

    app.listen(3001)
})