const {shopForBeans, soakTheBeans, cookTheBeans} = require('./2-library.js');

// Write your code below:
async function makeBeans() {
  const type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();
