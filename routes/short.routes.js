const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const shorten = require("simple-short");
const tokenSecret = "myWebTokenSecret";
const bcrypt = require("bcryptjs");

const pool = mysql.createPool({
	host: "31.31.196.109",
	user: "u1588120_root",
	database: "u1588120_database",
	password: "Surenkov1985@gmail.com",
});

router.post("/register", (req, res) => {
	if (!req.body) {
		return res.status(400).json({
			errors: errors.array(),
			message: "Bad Request",
		});
	}

	const { username, password } = req.body;

	pool.query(
		"SELECT * FROM users WHERE username=?",
		username,
		(err, data) => {
			if (err) {
				return res.status(400).json({
					message: `Error`,
				});
			} else {
				if (data.length !== 0) {
					return res.status(400).json({
						message: `User with username='${username}' already exists`,
					});
				} else {
					const hashPass = bcrypt.hashSync(password, 10);
					const user = [username, hashPass];

					pool.query(
						"INSERT INTO users(username, password) VALUES(?, ?)",
						user,
						(err, data) => {
							if (err) {
								return res.status(404).json({
									message: `Bad request`,
								});
							} else {
								return res
									.status(200)
									.json({ userId: data.insertId });
							}
						}
					);
				}
			}
		}
	);
});

router.post("/login", (req, res) => {
	if (!req.body) {
		return res.status(400).json({
			errors: errors.array(),
			message: "Bad Request",
		});
	}

	const { username, password } = req.body;

	pool.query(
		"SELECT * FROM users WHERE username=?",
		username,
		(err, data) => {
			if (err) {
				return res.status(400).json({ message: "Error" });
			}

			const user = data[0];

			if (!user) {
				return res
					.status(400)
					.json({ message: "Username or password incorrect" });
			}

			const isMatch = bcrypt.compareSync(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ message: "Username or password incorrect" });
			}

			const accessToken = jwt.sign(
				{ username: data[0].username, userId: data[0].id },
				tokenSecret
			);
			return res.status(200).json({
				id: data[0].id,
				accessToken,
			});
		}
	);
});

router.post("/squeeze", (req, res) => {
	const auth = req.headers.authorization;

	if (auth) {
		const token = req.headers.authorization.split(" ")[1];

		jwt.verify(token, tokenSecret, (err, data) => {
			if (err) {
				res.status(401).send({ message: "Not autentificated" });
			}

			const short = shorten(req.body.link);
			const userId = data.userId;
			const target = req.body.link;
			const counter = 0;
			const date = new Date();

			if (!short) {
				return res.status(400).send({ message: "URL host invalid" });
			}

			const shortData = [userId, target, short, counter, date];

			pool.query(
				"SELECT * FROM short_links WHERE userId=? AND target=?",
				[userId, target],
				(err, data) => {
					if (err) {
						return res.status(404).json({ message: err });
					}
					if (data.length > 0) {
						return res
							.status(404)
							.json({ message: `Link ${target} already exists` });
					}
					pool.query(
						"INSERT INTO short_links (userId, target, short, counter, date) VALUES (?, ?, ?, ?, ?)",
						shortData,
						(err, data) => {
							if (err) {
								return res
									.status(404)
									.json({ message: "Bad Request" });
							}

							return res.status(200).json({ data });
						}
					);
				}
			);
		});
	}
});

router.post("/statistics", (req, res) => {
	const auth = req.headers.authorization;

	if (auth) {
		const token = req.headers.authorization.split(" ")[1];
		const { id, offset, limit, order } = req.body.body;

		jwt.verify(token, tokenSecret, (err, data) => {
			if (err) {
				res.status(401).json({ message: "Not autentificated" });
			}
			pool.query(
				`SELECT * FROM short_links WHERE userId=? ORDER BY ${order.val} ${order.order} LIMIT ${limit} OFFSET ${offset}`,
				id,
				(err, data) => {
					if (err) {
						return res.status(400).json({ message: "Bad Request" });
					}

					return res.status(200).json({ data });
				}
			);
		});
	}
});

router.get("/s/:short", (req, res) => {
	const short = req.params.short;

	pool.query(
		"SELECT * FROM short_links WHERE short=?",
		short,
		(err, data) => {
			if (err) {
				return res.status(400).json({ message: err });
			}
			const target = data.find((item) => item.short === short).target;
			const counter =
				data.find((item) => item.short === short).counter + 1;
			pool.query(
				`UPDATE short_links
				SET counter=?
				WHERE short=?`,
				[counter, short],
				(err) => {
					if (err) {
						return res.status(400).json({ message: "Bad Request" });
					}
					res.redirect(target);
					res.end();
				}
			);
		}
	);
});

module.exports = router;
