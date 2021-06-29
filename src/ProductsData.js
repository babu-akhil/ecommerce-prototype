import url0_1 from "./Images/Products/0/1.jpeg";

import url0_2 from "./Images/Products/0/2.jpeg";

import url0_3 from "./Images/Products/0/3.jpeg";

import url0_4 from "./Images/Products/0/4.jpeg";

import url1_1 from "./Images/Products/1/0.jpeg";

import url1_2 from "./Images/Products/1/1.jpeg";

import url1_3 from "./Images/Products/1/2.jpeg";

import url1_4 from "./Images/Products/1/3.jpeg";

import url2_1 from "./Images/Products/2/0.jpeg";

import url2_2 from "./Images/Products/2/1.jpeg";

import url2_3 from "./Images/Products/2/2.jpeg";

import url2_4 from "./Images/Products/2/3.jpeg";

import url3_1 from "./Images/Products/3/0.jpeg";

import url3_2 from "./Images/Products/3/1.jpeg";

import url3_3 from "./Images/Products/3/2.jpeg";

import url3_4 from "./Images/Products/3/3.jpeg";

import url4_1 from "./Images/Products/4/0.jpeg";

import url4_2 from "./Images/Products/4/1.jpeg";

import url4_3 from "./Images/Products/4/2.jpeg";

import url4_4 from "./Images/Products/4/3.jpeg";

import url5_1 from "./Images/Products/5/0.jpeg";

import url5_2 from "./Images/Products/5/1.png";

import url5_3 from "./Images/Products/5/2.png";

import url5_4 from "./Images/Products/5/3.png";

let productsData = [];

function addToProducts(name, sex, price, images) {
  productsData.push({
    id: productsData.length,
    name: name,
    sex: sex,
    price: price,
    images: images,
  });
}

addToProducts('Nike Air Max SE 12', 'M', 11396, [
  { url:  url0_1 },
  { url:  url0_2 },
  { url:  url0_3 },
  { url:  url0_4 },
])
addToProducts('Nike Air Zoom', 'M', 13495, [
  { url:  url1_1 },
  { url:  url1_2 },
  { url:  url1_3 },
  { url:  url1_4 },
])

addToProducts('Nike Air Huarache', 'M', 10295, [
  { url:  url2_1 },
  { url:  url2_2 },
  { url:  url2_3 },
  { url:  url2_4 },
])

addToProducts('Nike Air Vapormax 21', 'M', 17595, [
  { url:  url3_1 },
  { url:  url3_2 },
  { url:  url3_3 },
  { url:  url3_4 },
])

addToProducts('Nike Flow 2020', 'M', 16595, [
  { url:  url5_1 },
  { url:  url5_2 },
  { url:  url5_3 },
  { url:  url5_4 },
])



export { productsData };
