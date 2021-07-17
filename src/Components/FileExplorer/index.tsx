import React from "react";
import { NavLink } from "react-router-dom";
import pastebin from "../../apis/pastebin";
import {
	api_dev_key,
	api_option,
	api_paste_expire_date,
	api_paste_format,
	api_paste_private,
} from "../../Config/pastebin_api";
import "./fileexplorer.css";

export interface FileExplorerProps {
	srcDoc: string;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ srcDoc }) => {
	const [docName, setDocName] = React.useState<string>("Untitled Code");

	let api_paste_name: string = "";
	let api_paste_code: string = "";

	React.useEffect(() => {
		// eslint-disable-next-line
		api_paste_name = docName;
		// eslint-disable-next-line
		api_paste_code = srcDoc;
	}, [docName]);

	const handleClick = () => {
		pastebin
			.post("/", {
				params: {
					api_dev_key,
					api_option,
					api_paste_expire_date,
					api_paste_format,
					api_paste_private,
					api_paste_name,
					api_paste_code,
				},
			})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="file-explorer-wrapper">
			<div className="file-explorer-inner">
				<input
					type="text"
					placeholder="File Name"
					value={docName}
					onChange={e => {
						setDocName(e.target.value);
					}}
				/>
				<nav className="nav">
					<ul>
						<NavLink to="/html">
							<li>
								<i className="fas fa-code"></i>
								<span>index.html</span>
							</li>
						</NavLink>

						<NavLink to="/css">
							<li>
								<i className="fas fa-hashtag"></i>
								<span>index.css</span>
							</li>
						</NavLink>

						<NavLink to="/js">
							<li>
								<i className="fab fa-js-square"></i>
								<span>index.js</span>
							</li>
						</NavLink>
					</ul>
				</nav>

				<button onClick={handleClick}>
					<i className="fas fa-share" /> Share Code
				</button>
			</div>
		</div>
	);
};

export default FileExplorer;
