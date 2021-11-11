// Reference https://ant.design/components/tabs/

// resizable tab example
// useEffect(() => {
//   const resizeObserver = new ResizeObserver(setPaneResponsiveSize);

//   resizeObserver.observe(resizerRef.current);

//   return () => {
//     resizeObserver.unobserve(resizerRef.current);
//   };
// }, []);

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
