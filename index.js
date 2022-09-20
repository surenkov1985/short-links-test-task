const express = require("express");
const router = require("./routes/short.routes");
const cors = require("cors");
const path = require("path");

const mysql = require("mysql2");

const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

const app = express();
const port = 5000;

app.use(express.json({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use("/", express.static(path.join(__dirname, "client", "dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}

app.use(cors(corsOptions));

app.use("/", router);

app.listen(port, () => {
	console.log("Hello");
});


