// // import {
// //   useState,
// //   useEffect
// // } from "react";
// import useLocalStorage from 'use-local-storage'

// // const useStyleTheme = () => {
// //   let localTheme = localStorage.getItem('theme'); // localTheme: "light" | "dark";

// //   const [mode, setMode] = useState(localTheme);


// //   const onSelectMode = (mode) => {
// //     setMode(mode)
// //     localStorage.setItem('theme', mode);
// //     console.log(mode)
// //   }


// //   useEffect(() => {

// //     // Add listener to update styles
// //     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));
// //     // Setup dark/light mode for the first time
// //     onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

// //     // Remove listener
// //     return () => {
// //       window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
// //     }
// //   }, []);


// //   return {
// //     mode,
// //     onSelectMode
// //   }
// // }



// const useStyleTheme = () => {

// const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


// const switchTheme = () => {
//   const newTheme = theme === 'light' ? 'dark' : 'light';
//   console.log(theme);
//   setTheme(newTheme);
// }


// return (
//   switchTheme,
//   theme
// )
// };

// export default useStyleTheme;





