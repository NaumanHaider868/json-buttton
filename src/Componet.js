import React, { useState, useEffect } from 'react';

function MyComponent() {
//   const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

//   function handleClick() {
//     setIndex(index + 1);

//     // Make API request to get data for next item
//     fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
//       .then(response => response.json())
//       .then(data => setData(data), console.log(data));
//     const response =  fetch(Data);
//       const jsonData =  response.json();
//       setData(jsonData);
//       console.log(jsonData)
//   }
//   function prevHandleClick() {
//     setIndex(index - 1);

//     // Make API request to get data for next item
//     fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
//       .then(response => response.json())
//       .then(data => setData(data), console.log(data));
//   }
useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Data.json');
      const jsonData = await response.json();
    //   setData(jsonData);
    console.log(jsonData)
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <button onClick={handleClick}>Next</button> */}
      {/* <button onClick={prevHandleClick}>Prev</button> */}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}

export default MyComponent;