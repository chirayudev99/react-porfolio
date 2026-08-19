import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  var sortBy2 = function (arr, fn) {
    let sortedArr = []; // Initialize an empty array to hold sorted elements.

    for (let i = 0; i < arr.length; i++) {
        let inserted = false;

        for (let j = 0; j < sortedArr.length; j++) {
            // Compare using the function `fn`.
            if (fn(arr[i]) < fn(sortedArr[j])) {
                sortedArr.splice(j, 0, arr[i]); // Insert at the correct position.
                inserted = true;
                break;
            }
        }

        // If the element is greater than all elements in sortedArr, push it to the end.
        if (!inserted) {
            sortedArr.push(arr[i]);
        }
    }

    return sortedArr;
};


  var sortBy = function (arr, fn) {
    let newArr = [];
    //1,1.5,,4,5
    for (let i = 0; i < arr.length; i++) {
      
      if (i == 0) {
        newArr.push(arr[i]);
      }else{
      

        for (let j = newArr.length; j > 0; j--) {
              console.log(i,j,fn(newArr[j-1]),"test");
                
          if (fn(arr[i]) > fn(newArr[j-1])) {
            console.log("fn",fn(arr[i]),j);
            
            const idx = newArr.indexOf(fn(newArr[j-1]));
            const newNumbers = [
              ...newArr.slice(0, idx),
              arr[i],
              ...newArr.slice(idx),
            ];
            newArr = newNumbers;
          }else{     
            newArr.unshift(arr[i])

          }
        }
      }
    }
    return newArr;

  };

  console.log(sortBy2([[3, 4], [5, 2], [10, 1]], (x) => x[1]),"sortBy");

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repear bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
