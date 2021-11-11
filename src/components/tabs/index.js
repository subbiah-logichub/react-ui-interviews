// Reference https://ant.design/components/tabs/
import React from "react";

import "./index.scss";

export function Tabs(props) {
  const { tabs } = props;

  return (
    <div className="tabs">
      {tabs.map(({ name }, index) => {
        return (
          <div key={index} className="tabs-tab">
            {name}
          </div>
        );
      })}
    </div>
  );
}
