import express from "express";
import { AppDataSource } from "./data-source.ts";

AppDataSource.initialize().then(() => {
    const app = express();
    app.listen(3000);

})