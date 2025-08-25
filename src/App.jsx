import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>
        Counter App
      </h1>

      <h2
        style={{
          fontSize: "4rem",
          color: count >= 0 ? "#2ecc71" : "#e74c3c",
          marginBottom: "30px",
        }}
      >
        {count}
      </h2>

      <div>
        <button
          onClick={increase}
          style={{
            padding: "12px 20px",
            margin: "0 10px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2ecc71",
            color: "white",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          + Increase
        </button>

        <button
          onClick={decrease}
          style={{
            padding: "12px 20px",
            margin: "0 10px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#e74c3c",
            color: "white",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          - Decrease
        </button>

        <button
          onClick={reset}
          style={{
            padding: "12px 20px",
            margin: "0 10px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#3498db",
            color: "white",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
