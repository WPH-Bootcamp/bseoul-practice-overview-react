import React, { useState, useEffect, useRef, type ChangeEvent } from "react";

const UseRefExample: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [random, setRandom] = useState(1);

  const randomValueRef = useRef(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRandomValueRef = () => {
    randomValueRef.current = Math.random();
    setRandom(randomValueRef.current);
    console.log("Updated ref value : ", randomValueRef.current);
  };

  useEffect(() => {
    console.log("component is re rendering....");
  });

  console.log(name);
  console.log(randomValueRef);

  return (
    <div>
      <h1>Use Ref Example</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" value={name} onChange={handleChange} />

      <button onClick={handleRandomValueRef}>Change Ref Value</button>

      <h1>Nama : {name}</h1>
      <p>{random}</p>
    </div>
  );
};

export default UseRefExample;
