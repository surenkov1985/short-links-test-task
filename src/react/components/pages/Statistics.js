import React, { useState } from "react";
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from "react-icons/ai";

export const Statistics = () => {
	const [shortError, setShortError] = useState("");
	const [statisticError, setStatisticError] = useState("");
	const data = [];

	return (
		<div>
			<h1>STATISTICS</h1>
			<div>
				{shortError && <div style={{ color: "red" }}>{shortError}</div>}
				<form>
					<input type="text" placeholder="Shorten your link" />
					<input type="submit" value="Shorten" />
				</form>
			</div>

			<div>
				<form className="filterForm">
					<input type="text" />
				</form>
				<form className="itemSelectForm">
					<p>
						Items:
						<select>
							<option>5</option>
							<option>10</option>
							<option>20</option>
							<option>50</option>
						</select>
					</p>
				</form>
			</div>
			<div>
				{statisticError && (
					<div style={{ color: "red" }}>{statisticError}</div>
				)}
				<div>
					<div>
						<div>
							<span>Long URL</span>
							<button>
								<AiFillCaretDown />
							</button>
						</div>
						<div>
							<span>Short URL</span>
							<button>
								<AiFillCaretDown />
							</button>
						</div>
						<div>
							<span>Clicks</span>
							<button>
								<AiFillCaretDown />
							</button>
						</div>
					</div>
					<ul>
						{data.map((item) => {
							return (
								<li>
									<div>{item.target}</div>
									<div>{item.short}</div>
									<div>{item.counter}</div>
								</li>
							);
						})}
					</ul>
					<div>
						<button>
							<AiOutlineArrowLeft /> Prev
						</button>
						<button>
							Next <AiOutlineArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
