import React from "react";

export function Input({
  placeholder = "Topic name",
  value,
  setValue,
  testid = "",
}: any) {
  return (
    <input
      type="text"
      value={value}
      data-testid={testid}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="pb-1 w-full mb-4 outline-none border-b-2 border-blue-300"
    />
  );
}
