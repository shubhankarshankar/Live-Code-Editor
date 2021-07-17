import * as React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/mode/css/css";
import "./codeeditor.css";

export interface CSSEditorProps {
	value: string;
	onChange: (value: string) => void;
}

const CSSEditor: React.FC<CSSEditorProps> = ({ value, onChange }) => {
	function handleChange(editor: any, data: any, value: string) {
		onChange(value);
	}

	return (
		<div className="code-editor-wrapper">
			<ControlledEditor
				value={value}
				onBeforeChange={handleChange}
				options={{
					lineWrapping: true,
					matchBrackets: true,
					tabSize: 2,
					mode: "css",
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</div>
	);
};

export default CSSEditor;
