import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/navbar";
import HomeScreen from "./screens/home";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter, Route, Routes,   Navigate } from "react-router-dom";

import Checkout from "./screens/home/Checkout";

function App() {
  
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <NavBar />
                <HomeScreen />
              </div>
            }
          />
          <Route element={<div className="App">
                <NavBar />
                <Checkout />
              </div>} path="/checkout" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
// import React, { useImperativeHandle, useState } from "react";
// import { useRef, useEffect, forwardRef } from "react";
// const Test = forwardRef((props, ref) => {
//   // console.log(props,ref)
//   const [showTest, setShowTest] = useState(true);
//    useImperativeHandle(ref, () => {
//     return { setShowTest };
//   });

//   if (!showTest) return null;
//   return <h1>child comp</h1>;
// });

// const App = () => {
//   const buttonRef = useRef(null);
//   const testRef = useRef(null);

//   const toggle = () => {

//     testRef.current.setShowTest((prev) => !prev);
//     // console.log(testRef.current.showTest(old=>!old))
//   };
//   return (
//     <div>
//       <div>parent Comp</div>
//       <button ref={buttonRef} onClick={toggle}>
//         click
//       </button>
//       <Test ref={testRef} x={10} y={20}/>
//     </div>
//   );
// };
// export default App;
