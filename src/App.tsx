import * as React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import CodeEditor from "./Components/CodeEditor";
import HTMLEditor from "./Components/CodeEditor/HTMLEditor";
import CSSEditor from "./Components/CodeEditor/CSSEditor";
import JSEditor from "./Components/CodeEditor/JSEditor";
import FileExplorer from "./Components/FileExplorer";
// import Page404 from "./Components/404";
import useSessionStorage from "./hooks/useSessionStorage";
import { defaultHTML, defaultCSS } from "./Config/defaults";
//import LiveView from "./Components/LiveView";
import "./App.css";

const App: React.FC = () => {
	const [html, setHtml] = useSessionStorage("html", defaultHTML);
	const [css, setCss] = useSessionStorage("css", defaultCSS);
	const [js, setJs] = useSessionStorage("js", " ");
	const [srcDoc, setSrcDoc] = React.useState("");

	React.useEffect(() => {
		setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
	}, [html, css, js]);

	return (
		<div className="App">
			<Router>
				<FileExplorer srcDoc={srcDoc} />

				<div className="editor-main-outer-wrapper">
					<Switch>
						<Route exact path={`/`}>
							<Redirect to={`/home`} />
						</Route>
						<Route exact path={`/home`}>
							<CodeEditor />
						</Route>
						<Route exact path={`/html`}>
							<HTMLEditor value={html} onChange={setHtml} />
						</Route>
						<Route exact path={`/css`}>
							<CSSEditor value={css} onChange={setCss} />
						</Route>
						<Route exact path={`/js`}>
							<JSEditor value={js} onChange={setJs} />
						</Route>
						<Route exact path={`/404`}>
							<Redirect to={`/home`} />
						</Route>
						<Redirect to={`/home`} />
					</Switch>
				</div>

				<div className="live-view-wrapper">
					<iframe
						srcDoc={srcDoc}
						title="output"
						sandbox="allow-scripts"
						frameBorder="0"
						width="100%"
						height="100%"
					/>
				</div>
			</Router>
		</div>
	);
};

export default App;
