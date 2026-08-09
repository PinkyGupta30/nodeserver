let v = "ABC";
let v2 = " XYZ";
let bufferVal = Buffer.from(v);
let bufferVal2 = Buffer.from(v2);

console.log(bufferVal);
console.log(bufferVal2);
let combineBuffer = Buffer.concat([bufferVal,bufferVal2])
console.log(combineBuffer.toString());