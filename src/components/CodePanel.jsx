import Editor from "@monaco-editor/react";
import styles from "../styles/CodePanel.module.css";
import { useRef, useState } from "react";
import { jsDefault, htmlDefault } from "../interpreter/presets";
import Output from "./Output";

function CodePanel() {
  const [mode, setMode] = useState(jsDefault.language);
  const [jsCode, setJsCode] = useState(jsDefault.value);
  const [htmlCode, setHtmlCode] = useState(htmlDefault.value);
  const codeRef = useRef(jsDefault.value);

  function runCode() {
    const sourceCode = codeRef.current.getValue();
    if (!sourceCode) return;
  }

  function handleEditorChange(value) {
    codeRef.current = value;
    if (mode === jsDefault.language) setJsCode(value);
    else setHtmlCode(value);
  }

  function switchMode(next) {
    setMode(next);
    codeRef.current = next === jsDefault.language ? jsCode : htmlCode;
  }

  const editorValue = mode === jsDefault.language ? jsCode : htmlCode;

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <div className={styles.modeToggle}>
          <button
            className={`${styles.modeBtn} ${mode === jsDefault.language ? styles.modeBtnActive : ""}`}
            onClick={() => switchMode(jsDefault.language)}
          >
            JS
          </button>
          <button
            className={`${styles.modeBtn} ${mode === htmlDefault.language ? styles.modeBtnActive : ""}`}
            onClick={() => switchMode(htmlDefault.language)}
          >
            HTML
          </button>
        </div>

        <button className={styles.runButton} onClick={runCode}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Run
        </button>
      </div>

      <div className={styles.editorWrapper}>
        <Editor
          height="100%"
          language={mode}
          theme="vs-dark"
          options={{
            fontSize: 13,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
          }}
          onChange={handleEditorChange}
          value={editorValue}
        />
      </div>
      <Output codeRef={codeRef} />
    </div>
  );
}

export default CodePanel;
