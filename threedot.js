const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22,29];
//const allAges = ages.concat(ages2).concat(ages3);
const allAges = [...ages, ...ages2, 67, ...ages3];
//console.log(allAges);
const business = 450;
const minister = 390;
const sochib = 230;
const takaPoisha = [650, 390, 230];
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);

