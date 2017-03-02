import './index.css'; // for webpack to bundle for us

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger  // uncomment this to set breakpoint
console.log(`I would not pay ${courseValue} for this course!`);
