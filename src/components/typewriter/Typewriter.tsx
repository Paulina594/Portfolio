import { useState } from "react";
//
// export const Typewriter = (props: { keywords: string[] }) => {
//   let loopNum = 0;
//   let currentKeyword: string | null = null;
//   let isDeleting = false;
//   let text: string|undefined = "";
//   let delta = null;
//   let period = 500;
//
//   function tick() {
//     text = currentKeyword?.substring(0, text.length + (isDeleting ? -1 : 1));
//
//     delta = 200 - Math.random() * 100;
//
//     if (isDeleting) {
//       delta /= 2;
//     }
//
//     if (!isDeleting && text === currentKeyword) {
//       delta = period;
//       isDeleting = true;
//     } else if (isDeleting && text === "") {
//       isDeleting = false;
//       loopNum++;
//       delta = 500;
//     }
//
//     setTimeout(() => {
//       tick();
//     }, delta);
//   }
// };
