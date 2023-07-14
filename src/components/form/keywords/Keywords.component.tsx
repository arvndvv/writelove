import React, { useState } from "react";
import "./Keywords.styles.scss";

export function Keywords({ keywords, setKeywords }: any) {
  const [text, setText] = useState<string>("");
  const handleInput = (e: any) => {
    let splitInput = e.target.value.split(",");
    const remaining = splitInput.splice(-1)[0];
    setText(remaining);
    setKeywords((prev: any) => [...prev, ...splitInput]);
  };
  const removeKeyword = (index: number) => {
    setKeywords((prev: any) => {
      prev.splice(index, 1);
      return [...prev];
    });
  };
  return (
    <div className="flex flex-col">
      <div className="input-area">
        {keywords.map((keyword: string, index: number) => (
          <span className="keyword" key={index}>
            {keyword}
            <span
              className="material-icons remove"
              onClick={() => removeKeyword(index)}
            >
              close
            </span>
          </span>
        ))}
        <input
          className="input"
          type="text"
          value={text}
          placeholder="Keywords..."
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setKeywords((prev: any) => [...prev, text]);
              setText("");
            }
          }}
        />
      </div>
      <small className="mb-4 text-slate-400">
        press enter or comma to add keyword
      </small>
    </div>
  );
}
