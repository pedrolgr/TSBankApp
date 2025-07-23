import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import "reflect-metadata";
dotenv.config();

const { PORT = 3000 } = process.env;

AppDataSource.initialize()
  .then(async () => {

    const app = express();
    app.use(express.json());

    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!')
    })

  })
  .catch((error) => console.log(error));
