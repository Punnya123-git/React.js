import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1
          className="text-4xl font-bold"
          style={{
            color:
              color === "red" ? "white" : color === "green" ? "blue" : color === "blue" ? "black" : "white"
          }}
        >
          Background Color Changer
        </h1>

        <div className="flex gap-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>

          <button
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => setColor("green")}
          >
            Green
          </button>

          {/* <div>
            <button
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
