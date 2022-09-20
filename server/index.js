const express = require("express");
const router = require("./routes/short.routes");
const cors = require("cors");

const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};


const routes = require("./routes/short.routes");

const app = express();
const port = 5000;

app.use(express.json({ extended: true }));

app.use(cors(corsOptions));

app.use("/", router);

app.listen(port, () => {
	console.log("Hello");
});
