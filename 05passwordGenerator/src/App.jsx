import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(4);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback is used to memoize the function and prevent unnecessary re-renders
  //useCallback is used to remember a function between renders so that React doesn't create a new function unnecessarily on every render.
  //useEffect is a Hook used to perform side effects in a component, such as running code when the component loads, when a value changes, or when it is removed.
  //useRef is used to remember a value between renders or directly access an HTML element without causing a re-render when the ref changes.

  //useState → Stores data and updates the UI.
  //useEffect → Runs code after rendering.
  //useRef → Remembers a value or gives direct access to an element.

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+[]=-/\|";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl shadow-xl bg-gray-900">
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-2">
          Password Generator
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Create a strong, secure password
        </p>

        <div className="flex rounded-xl overflow-hidden bg-white p-1">
          <input
            type="text"
            ref={passwordRef}
            value={password}
            className="outline-none w-full px-4 py-3 text-gray-800 bg-transparent"
            placeholder="Your password"
            readOnly
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700
            hover:scale-105 active:scale-95
            hover:shadow-lg hover:shadow-blue-500/30
            text-white font-semibold px-5 rounded-lg
            transition-all duration-200 ease-in-out shrink-0
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm mt-4 text-gray-300">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="range"
              min={4}
              max={100}
              value={length}
              className="cursor-pointer w-full accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="whitespace-nowrap">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
