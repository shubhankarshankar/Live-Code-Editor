import React from "react";
import { NavLink } from "react-router-dom";
import "./fileexplorer.css";

export interface FileExplorerProps {
	srcDoc: string;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ srcDoc }) => {
	const [docName, setDocName] = React.useState<string>("Untitled Code");
	const [shareLink, setShareLink] = React.useState<string | null>(null);

	let api_paste_name: string = "";
	let api_paste_code: string = "";

	React.useEffect(() => {
		// eslint-disable-next-line
		api_paste_name = docName;
		// eslint-disable-next-line
		api_paste_code = srcDoc;
	}, [docName, srcDoc]);

	const handleClick = () => {
		var request = new XMLHttpRequest();

		request.open("POST", "https://pastebin.com/api/api_post.php", true);

		request.setRequestHeader(
			"Content-type",
			"application/x-www-form-urlencoded"
		);

		request.send(
			`api_dev_key=_irQT05SCN0K8yoe8lcIoIxBSY7yUU-h&api_option=paste&api_paste_private=0&api_paste_code=${api_paste_code}&api_paste_name=${api_paste_name}`
		);

		request.onload = () => {
			setShareLink(request.response);
		};
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

				{shareLink && (
					<div className="link-share">
						Unless the limit for 24 hrs has reached, here is your shareable
						link, posted code on pastebin:
						<br />
						<br />
						{shareLink}
					</div>
				)}
			</div>
		</div>
	);
};

export default FileExplorer;
