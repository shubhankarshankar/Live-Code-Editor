import React from "react";
import { NavLink } from "react-router-dom";
import "./fileexplorer.css";

class FileExplorer extends React.Component {
	render() {
		return (
			<div className="file-explorer-wrapper">
				<div className="file-explorer-inner">
					<h1>File Explorer</h1>
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
				</div>
			</div>
		);
	}
}

export default FileExplorer;
