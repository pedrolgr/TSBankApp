import express from "express";
import { AppDataSource } from "./data-source.ts";
import type { Request, Response, NextFunction } from 'express';
import routes from "./routes.ts";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use(routes);

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        res.status(400).json({ message: err.message });
    });

    app.listen(3001)
})