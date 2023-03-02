function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let changeDue = cash - price;
    let change = [];
    let cashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    if (cashInDrawer < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: change };
    } else if (cashInDrawer === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    cid = cid.reverse();
  
    for (let i = 0; i < cid.length; i++) {
      let coinName = cid[i][0];
      let coinTotal = cid[i][1];
      let coinValue = currencyValues[coinName];
      let coinAmount = Math.round(coinTotal / coinValue);
      let coinToReturn = 0;
  
      while (changeDue >= coinValue && coinAmount > 0) {
        changeDue -= coinValue;
        changeDue = Math.round(changeDue * 100) / 100;
        coinAmount--;
        coinToReturn++;
      }
  
      if (coinToReturn > 0) {
        change.push([coinName, coinValue * coinToReturn]);
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }
  
  
//   const result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
const result =  checkCashRegister(190, 40, [["ONE", 90], ["DIME", 3.1], ["QUARTER", 4.25]]) 
console.log(result);