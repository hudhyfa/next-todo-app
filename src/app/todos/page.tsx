"use client";

import { useState } from "react";

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([1, 2, 3]);
  return (
    <>
      <div className="flex flex-col items-center gap-8 pt-8">
        <div className="text-2xl">Todo list with Next 14</div>
        <div className="flex gap-2">
          <input
            className="text-xl rounded-md shadow-md border border-black"
            type="text"
            placeholder="Enter todo task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="text-xl shadow-md bg-slate-950 text-white rounded-md px-3 py-1">
            Add
          </button>
          <button className="text-xl shadow-md bg-red-800 text-white rounded-md px-3 py-1">
            Clear
          </button>
        </div>
        <div className="w-3/6 flex flex-col border rounded-md px-4 py-2 shadow-md">
          {todos.map((todo, index) => {
            return (
              <>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <div>Write code</div>
                  </div>
                  <div className="flex gap-2">
                    {/* <button className="text-xl shadow-md bg-slate-950 text-white rounded-md px-3 py-1">
                      Edit
                    </button> */}
                    <button className="text-xl shadow-md bg-slate-950 text-white rounded-md px-3 py-1">
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
