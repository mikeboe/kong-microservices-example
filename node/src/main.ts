import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(
    `[ http ]: ${req.method} ${req.path} ${res.statusCode} ${req.headers["x-kong-request-id"]}`
  );
  next();
});

app.get("/node", (req: Request, res: Response) => {
  res.status(200).send({ data: "Hello from NODE API 🚀!" });
});

app.get("/node/protected", (req: Request, res: Response) => {
  res.status(200).send({ data: "Hello from private NODE route 🚀!" });
});

app.post("/token", (req: Request, res: Response) => {
  const { username } = req.body;

  const token = jwt.sign({ username, iss: "microservices-fwpm" }, "secret", {
    expiresIn: "1h",
  });

  res.status(200).send({ token });
});

app.listen(port, () => {
  console.log(`[ ready ]: Listenining on ${port}`);
});
