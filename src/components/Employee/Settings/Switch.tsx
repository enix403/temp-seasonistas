"use client";
import { useState } from "react";

const Switch = ({ initial = false }: { initial?: boolean }) => {
  const [enabled, setEnabled] = useState(initial);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative h-[22px] w-[40px] rounded-full transition-colors duration-300 ${
        enabled ? "bg-[#559092]" : "bg-[#DFE5E8]"
      }`}
    >
      <span
        className={`absolute top-1/2 left-1 h-4 w-4 -translate-y-1/2 transform rounded-full border-2 border-white transition-all duration-300 ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default Switch;
