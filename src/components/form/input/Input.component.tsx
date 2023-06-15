import React from "react";

export function Input({ placeholder = "Topic name", topic, setTopic }: any) {
  return (
    <input
      type="text"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      placeholder={placeholder}
      className="pb-1 w-full mb-4 outline-none border-b-2 border-blue-300"
    />
  );
}
