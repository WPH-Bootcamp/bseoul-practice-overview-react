import React, { useEffect, useState } from "react";

const RefCallback = () => {
  const [width, setWidth] = useState<number | null>(null);

  const setDivRef = (element: HTMLDivElement | null) => {
    if (element) {
      setWidth(element.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    console.log("Component is rendered, width :", width);
  });

  return (
    <div>
      <h1>Ref Callback Example</h1>
      <div
        ref={setDivRef}
        style={{ width: "50%", backgroundColor: "lightgray" }}
      >
        Resize and see the update.
      </div>
      <p>Width of the div : {width}px</p>
    </div>
  );
};

export default RefCallback;
