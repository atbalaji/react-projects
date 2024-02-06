import { useEffect, useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  function createHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const hexLength = hex.length;
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hexLength)];
    }
    setColor(hexColor);
  }

  function createRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }

  const handleCreateRandomColor = () => {
    colorType === "hex" ? createHexColor() : createRGBColor();
  };

  useEffect(() => handleCreateRandomColor(), [colorType]);

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <button onClick={() => setColorType("hex")}>Create Hex Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random color</button>

      <div style={{ 
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "20px",
        marginTop: "50px",
        color: "#fff"
      }}>
        <h3>{colorType} Color</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
