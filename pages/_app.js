//all commented code on this page is for smooth scrolling
//all you need is on this page
//just add these styling to your base css
// .App {
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   /* pointer-events: none; */
// }
//experience -> good for desktop, bad for mobile device
// import { useRef, useLayoutEffect, useState } from "react";
import "../styles/globals.css";
import { AudioContextProvider } from "../store/audio-context";

// function getSize() {
//   if (typeof window === "undefined") {
//     return;
//   }

//   return {
//     width: window.innerWidth,
//     height: window.innerHeight,
//   };
// }

function MyApp({ Component, pageProps }) {
  // //Hook to grab window size
  // const [size, setSize] = useState({
  //   width: 414,
  //   height: 896,
  // });

  // useLayoutEffect(() => {
  //   function handleResize() {
  //     setSize(getSize());
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // // Ref for parent div and scrolling div
  // const app = useRef();
  // const scrollContainer = useRef();

  // // Configs
  // const data = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // // Run scrollrender once page is loaded.
  // useLayoutEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // }, []);

  // //set the height of the body.
  // useLayoutEffect(() => {
  //   setBodyHeight();
  // }, [size.height]);

  // //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;
  // };

  // // Scrolling
  // const skewScrolling = () => {
  //   //Set Current to the scroll position amount
  //   data.current = window.scrollY;
  //   // Set Previous to the scroll previous position
  //   data.previous += (data.current - data.previous) * data.ease;
  //   // Set rounded to
  //   data.rounded = Math.round(data.previous * 100) / 100;

  //   // Difference between
  //   const difference = data.current - data.rounded;
  //   const acceleration = difference / size.width;
  //   const velocity = +acceleration;
  //   const skew = velocity * 2;

  //   //Assign skew and smooth scrolling to the scroll container
  //   // `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`
  //   scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

  //   //loop vai raf
  //   requestAnimationFrame(() => skewScrolling());
  // };

  return (
    <AudioContextProvider>
      <Component {...pageProps} />
    </AudioContextProvider>
    // <div ref={app} className="App">
    //   <div ref={scrollContainer} className="scroll">
    //     <Component {...pageProps} />
    //   </div>
    // </div>
  );
}

export default MyApp;
