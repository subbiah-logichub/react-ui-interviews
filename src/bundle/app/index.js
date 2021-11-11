import React from "react";

import "./index.scss";

const options = [
  { name: "playbook" },
  { name: "dashboard" },
  { name: "alerts" },
  { name: "case-types" },
  { name: "analytics" },
  { name: "assistant" },
  { name: "modules" },
  { name: "settings" },
  { name: "cases" },
  { name: "streams" },
  { name: "baselines" },
];

export function App() {
  return (
    <div className="app">
      <div className="app-left">
        <div className="fill-items">
          {options.map(({ name }, index) => {
            return (
              <div key={index} className="fill-items-item">
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="app-right" />
    </div>
  );
}
