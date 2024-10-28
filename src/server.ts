import express from "express";
import { Request, Response } from "express";

import { configureEnvironment } from "./config/environment";
import configureSwagger from "./config/swagger";
import routes from "./routes/index";

configureEnvironment();

const API_BASE = process.env.API_BASE || "/api";
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) =>
  response.redirect("/api"),
);

configureSwagger(API_BASE, app);
app.use(API_BASE, routes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}${API_BASE}`);
});
