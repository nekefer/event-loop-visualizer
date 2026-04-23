import Editor from "@monaco-editor/react";
import styles from "../styles/CodePanel.module.css";
import { useEffect, useState } from "react";
import { presets } from "../interpreter/presets";

function CodePanel() {
  const [presetSelect, setPresetSelect] = useState("Synchronous Execution");

  function changeFile(e) {
    setPresetSelect(e.target.value);
  }

  function handleEditorChange(value, Event) {
    console.log("here is the current value: ", value);
  }

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>Preset</span>
        <select
          className={styles.presetSelect}
          onChange={changeFile}
          defaultValue='Synchronous Execution'
        >
          {Object.keys(presets).map((e) => (
            <option key={e} value={e}>
              {" "}
              {e}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.editorWrapper}>
        <Editor
          height="100%"
          defaultLanguage={presets["Synchronous Execution"].language}
          defaultValue={presets["Synchronous Execution"].value}
          theme="vs-dark"
          options={{
            fontSize: 13,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
          }}
          onChange={handleEditorChange}
          value={presets[presetSelect].value}
        />
      </div>

      <div className={styles.footer}>
        <button className={styles.runButton}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Run
        </button>
      </div>
    </div>
  );
}

export default CodePanel;
