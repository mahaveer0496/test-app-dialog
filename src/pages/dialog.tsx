import * as React from "react";

export default function Dialog() {
  const [showData, setShowData] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowData(!showData);
        }}
      >
        Click me
      </button>
      {showData && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi debitis
          dolorum, libero dolorem dolores nobis tempore vel odio? Enim, cumque
          neque aperiam cum magni veniam explicabo reiciendis harum vero libero?
        </p>
      )}
      <p>just one line</p>
    </>
  );
}
