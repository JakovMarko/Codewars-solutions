// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode != correctCode){
      return false;
    }
    let currentYear = parseInt(currentDate.split(' ')[2]);
    let expirationYear = parseInt(expirationDate.split(' ')[2]);
  
    let expirationMonth = expirationDate.split(' ')[0];
    let currentMonth = currentDate.split(' ')[0];
  
    let currentDay = parseInt(currentDate.split(', ')[0].split(' ')[1]);
    let expirationDay = parseInt(expirationDate.split(', ')[0].split(' ')[1]);
  
  
  
    let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    let resultCurrent = (360*currentYear+((1 + months.indexOf(currentMonth))*30) + currentDay);
    let resultExpiration = (360*expirationYear+(1+months.indexOf(expirationMonth))*30+expirationDay);
    if(resultExpiration - resultCurrent <= 1){
      return false;
    } else {
      return true;
    }
  }


console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));