# Event Loop Visualizer

A browser-based tool for understanding how the JavaScript event loop works. Write JavaScript or HTML in the editor, run it in a sandboxed iframe, and step through an animated visualization of the call stack, Web APIs, and callback queue.

Inspired by [Loupe](http://latentflip.com/loupe/).

---

## Features

- **Monaco editor** with JS and HTML modes
- **Sandboxed execution** — code runs in an isolated iframe, console output appears in the output panel
- **Event loop visualization** — step through frames showing the call stack, Web API area, and callback queue
- **Animated cards** — watch callbacks move between panels in real time using Framer Motion
- **Playback controls** — play, pause, step forward/backward, and adjust speed

---

## Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Monaco Editor](https://github.com/suren-atoyan/monaco-react)
- [Framer Motion](https://www.framer.com/motion/)
- [Acorn](https://github.com/acornjs/acorn) — JS parser for the interpreter

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
├── interpreter/
│   ├── presets.js       # default JS and HTML starting values
│   ├── parser.js        # acorn AST parsing
│   └── executor.js      # AST walker, produces frames
│
├── sandbox/
│   ├── buildSandbox.js        # builds iframe srcdoc with postMessage hooks
│   └── useSandboxMessages.js  # listens for messages from the iframe
│
├── hooks/
│   ├── usePlayback.js    # play, pause, step, speed logic
│   └── useInterpreter.js # runs interpreter, returns frames
│
├── components/
│   ├── CodePanel.jsx     # editor + toolbar + run button
│   ├── Output.jsx        # console output panel
│   ├── CallStack.jsx
│   ├── WebApiArea.jsx
│   ├── CallbackQueue.jsx
│   ├── ExplanationPanel.jsx
│   └── PlaybackControls.jsx
│
└── App.jsx               # top-level state (useReducer)
```

---

## How It Works

Hitting **Run** triggers two independent things:

1. **Sandbox** — the code is injected into a hidden `<iframe>` via `srcdoc`. `console.log` and `console.error` inside the iframe are patched to send messages back via `postMessage`, which appear in the output panel.

2. **Interpreter** — a custom AST walker parses the code with Acorn and produces an array of frames. Each frame is a snapshot of the call stack, Web API area, and callback queue at a specific moment in execution. The visualizer steps through these frames with Framer Motion animations.

The sandbox runs **real** code. The interpreter **simulates** it. They are completely independent.

---

## Build Status

| Phase | What | Status |
|---|---|---|
| — | Editor (Monaco + JS/HTML toggle) | ✅ Done |
| 1 | Sandbox + output panel | 🔄 In progress |
| 2 | Interpreter engine | ❌ |
| 3 | useReducer state machine | ❌ |
| 4 | Static visualizer panels | ❌ |
| 5 | Framer Motion animations | ❌ |
| 6 | Playback controls | ❌ |
| 7 | Polish + deploy | ❌ |
