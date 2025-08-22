"use client"
import { useState } from "react";

export default function Home() {
  const [buttonText, setButtonText] = useState<string>("Type text");
  const [buttonColor, setButtonColor] = useState<string>("#0070f3");
  const [buttonFontSize, setButtonFontSize] = useState<number>(16);
  const [buttonFontWeight, setButtonFontWeight] = useState<string>("normal");
  const [shadowClass, setShadowClass] = useState<string>("");
  const [buttonBorderRadius, setButtonBorderRadius] = useState<number>(10);
  const [buttonTextColor, setButtonTextColor] = useState<string>("#ffffff");

  type ButtonProps = {
    text: string;
    style: React.CSSProperties;
    size: number;
    weight: string;
    shadowClass: string;
    textColor: string;
  };

  function Button({ text, style, size, weight, shadowClass, textColor }: ButtonProps) {
    return (
      <div className="button-container">
        <button
          className={`${shadowClass}`}
          style={{ ...style, fontSize: size, fontWeight: weight, borderRadius: buttonBorderRadius, color: textColor }}>
          {text}
        </button>
      </div>
    );
  }

  const handleTextChange = (newText: string) => {
    setButtonText(newText);
  };

  const getCssCode = () => {
    let css = `.my-button {\n`;
    css += `  background-color: ${buttonColor};\n`;
    css += `  font-size: ${buttonFontSize}px;\n`;
    css += `  font-weight: ${buttonFontWeight};\n`;
    css += `  border: none;\n`;
    css += `  padding: 0.5rem 1rem;\n`;
    css += `  border-radius: ${buttonBorderRadius}px;\n`;
    if (shadowClass === "shadow-xl") {
      css += `  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);\n`;
    }
    css += `}`;
    return css;
  };

  return (
    <>
      <main className="container mx-4 m-auto pt-16 space-y-8 mb-8">
        <h2>Button Builder</h2>
        <div className="wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="flex justify-center 
          items-center bg-gray-50 p-4 border-gray-200 
          rounded-2xl text-gray-600
          border-2 
          ">
            <Button
              text={buttonText}
              style={{ backgroundColor: buttonColor }}
              size={buttonFontSize}
              weight={buttonFontWeight}
              shadowClass={shadowClass}
              textColor={buttonTextColor}
            />
          </div>

          <div className="builder-container bg-sky-600 p-4 border-gray-200 rounded-2xl text-white">

            <h3>Custom text</h3>
            <input type="text" placeholder="Enter custom text" onChange={(e) => handleTextChange(e.target.value)} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
              <h3>Background Color</h3>
              <input type="color" onChange={(e) => setButtonColor(e.target.value)} />
              </div>
              <div>
                <h3>Text Color</h3>
                <input type="color" onChange={(e) => setButtonTextColor(e.target.value)} />
              </div>
            </div>
            <h3>Font Style</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="font-size">
                <h4>Font Size</h4>
                <input type="number" value={buttonFontSize} min="8" max="72" onChange={(e) => setButtonFontSize(Number(e.target.value))} />
              </div>
              <div className="bold-italy">
                <h4>Font Weight</h4>
                <select onChange={(e) => setButtonFontWeight(e.target.value)}>
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                </select>
              </div>
            </div>

            <h3>Shadow</h3>
            <input type="checkbox" id="shadow" name="shadow" onChange={(e) => setShadowClass(e.target.checked ? "shadow-xl" : "")} />
            <label htmlFor="shadow">Shadow</label>

            <h3>Border Radius</h3>
            <input type="number" value={buttonBorderRadius} min="0" onChange={(e) => setButtonBorderRadius(Number(e.target.value))} />

          </div>
        </div>


        <h2>Get CSS Code</h2>
        <div className="p-8 bg-gray-600 rounded-2xl border-2 border-gray-300">
          <pre className="text-white">{getCssCode()}</pre>
        </div>
      </main>
    </>

  );
}
