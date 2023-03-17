
import React, { useState, useEffect } from 'react';
import Data from './Data.json'
import { useDispatch, useSelector } from 'react-redux';
import {increase,decrease} from './actions'

function App() {

  const myState = useSelector((state)=>state.inc_dec);
  const dispatch = useDispatch();

  const [data, setData] = useState([Data]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('Data.json');
  //     const jsonData = await response.json();
  //     setData(Data);
  //     console.log(Data)
  //   };

  //   fetchData();
  // }, []);
  const fetchData = data.json();
  console.log(fetchData)
  // const handleNextClick = () => {
  //   // setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  //   setCurrentIndex(currentIndex === data.length - 1 ? 0 : myState);
  //   console.log(currentIndex, "inc")
  // };

  // const handlePrevClick = () => {
  //   setCurrentIndex(currentIndex === 0 ? data.length - 1 : myState);
  //   // setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  //   console.log(currentIndex, "sub")
  // };

  // const handleReset = () => {
  //   setCurrentIndex(currentIndex == currentIndex);
  //   console.log(currentIndex, "reset")
  // };

  return (
    <div>
      <div className='container' style={{ 'marginTop': '150px' }}>
        <div className="card">
          <div className="card-header" style={{ 'background': 'skyblue' }}>
            <div className="btn-group" role="group" aria-label="Basic example" style={{ 'margin': 'auto' }}>
              <button type="button" className="btn" style={{ 'background': '#ff440078' }} onClick={dispatch(increase())}>Next</button>
              <button type="button" className="btn" style={{ 'background': '#ff440078' }} onClick={dispatch(decrease())}>Prev</button>
              {/* <button type="button" className="btn" style={{ 'background': '#ff440078' }} onClick={handlePrevClick}>Next</button> */}
            </div>
          </div>

          <div className="card-body" style={{ 'background': '#8fff93' }}>
            <div style={{ 'margin': '85px 10px 85px 10px', 'background': '#8fff93' }}>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                {/* {data[currentIndex]?.name} */}
                {data.myState?.name}
              </p>

              <p className='card-text'>
                {/* {data[currentIndex]?.email} */}
                {data.myState?.email}
              </p>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;



