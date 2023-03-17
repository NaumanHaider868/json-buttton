// import Data from './Data'
// import { Fragment, useState, useEffect } from 'react';
// import Component from './Componet';
// function App() {
//   // const [data, setData] = useState();
//   // const [index, setIndex] = useState(0);

//   // useEffect(() => {
//   //   const lastIndex = Data.length - 1;
//   //   if (index < 0) {
//   //     setIndex(lastIndex)
//   //   }
//   //   if (index > lastIndex) {
//   //     setIndex(0);
//   //   }
//   //   console.log(lastIndex)
//   // }, []);
//   // var first = Data[0];
//   // console.log(first)
//   // setData(first)

//   return (
//     <div>
//       <Component/>
// 
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Data from './Data.json'
function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('Data.json');
      // const jsonData = await response.json();
      setData(Data);
      console.log(Data)
    };

    fetchData();
  }, []);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    // setCurrentIndex(currentIndex === data.length - 1 ? currentIndex + 1: null);
    console.log(currentIndex, "inc")
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    // setCurrentIndex(currentIndex === 0 ? currentIndex - 1 : null);
    console.log(currentIndex, "sub")
  };

  const handleReset = () => {
    setCurrentIndex(currentIndex == currentIndex);
    console.log(currentIndex, "reset")
  };

  return (
    <div>
      <div className='container' style={{ 'marginTop': '150px' }}>
        <div className="card">
          <div className="card-header" style={{ 'background': 'skyblue' }}>
            <div className="btn-group" role="group" aria-label="Basic example" style={{ 'margin': 'auto' }}>
              <button type="button" className="btn" style={{ 'background': '#ff440078' }} onClick={handleReset}>Reset</button>
              <button type="button" className="btn" style={{ 'background': '#ff440078' }} onClick={handleNextClick}>Prev</button>
              <button type="button" className="btn" style={{ 'background': '#ff440078' }} onClick={handlePrevClick}>Next</button>
            </div>
          </div>

          <div className="card-body" style={{ 'background': '#8fff93' }}>
            <div style={{ 'margin': '85px 10px 85px 10px', 'background': '#8fff93' }}>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                {data[currentIndex]?.name}
              </p>

              <p className='card-text'>
              {data[currentIndex]?.email}
              </p>
                
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;



