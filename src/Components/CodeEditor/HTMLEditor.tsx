import * as React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/edit/matchbrackets";
import "./codeeditor.css";

export interface HTMLEditorProps {
	value: string;
	onChange: (value: string) => void;
}

const HTMLEditor: React.FC<HTMLEditorProps> = ({ value, onChange }) => {
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
					mode: "xml",
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</div>
	);
};

export default HTMLEditor;
