const arr = [1, 2, 3, "4", 5, "m"];

const obj = arr.reduce((acc, it) => ({ ...acc, [it]: parseInt(it) }), {});

// remove the Nan value
delete obj["NaN"];

console.log(obj);

// const backToArr = obj.reduce((acc, it) => [...acc, it], []);

// console.log(backToArr);
