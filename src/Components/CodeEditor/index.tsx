import * as React from "react";
import { Link } from "react-router-dom";
import "./codeeditor.css";

const CodeEditor: React.FC = () => {
	return (
		<div className="code-editor-wrapper">
			<div className="code-editor-landing">
				<h1>Welcome to code editor</h1>
				<div className="editor-desc">
					This is the code editor. You can edit any of the three files from the
					left hand side here.
				</div>
				<div className="instructions">
					Click on any of the files to start editing.
				</div>
				<div className="links">
					<ul>
						<li>
							Edit the HTML File - <Link to="/html">index.html</Link>
						</li>
						<li>
							Edit the CSS File - <Link to="/css">index.css</Link>
						</li>
						<li>
							Edit the JS File - <Link to="/js"> index.js</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CodeEditor;
