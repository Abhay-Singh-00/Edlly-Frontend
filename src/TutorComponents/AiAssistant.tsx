import React, { useState } from "react";

interface Message {
  from: "ai" | "me";
  text: string;
}

const AIAssistant: React.FC = () => {
  const [q, setQ] = useState<string>("");
  const [log, setLog] = useState<Message[]>([
    { from: "ai", text: "Hello Abhay — how can I help today?" }
  ]);

  const send = () => {
    if (!q) return;

    setLog((l) => [...l, { from: "me", text: q }]);
    setQ("");

    setTimeout(() => {
      setLog((l) => [
        ...l,
        { from: "ai", text: "Here is a concise explanation and example (AI generated)." }
      ]);
    }, 700);
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">AI Teaching Assistant</h3>
        <div className="text-sm text-gray-500">Saves chat to history</div>
      </div>

      <div className="h-64 overflow-auto p-3 border rounded bg-gray-50">
        {log.map((m, i) => (
          <div key={i} className={`mb-3 ${m.from === "ai" ? "text-left" : "text-right"}`}>
            <div
              className={`inline-block p-3 rounded ${
                m.from === "ai" ? "bg-white shadow" : "bg-[var(--primary)] text-white"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask the AI assistant..."
          className="flex-1 px-3 py-2 border rounded"
        />

        <button onClick={send} className="bg-[var(--primary)] text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
