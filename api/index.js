import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", postRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
