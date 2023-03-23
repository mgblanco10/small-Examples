const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      let result = eval(display.innerText);
      display.innerText = result.toFixed(4);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
        if (display.innerText == "Empty!" || display.innerText == "Infinity") {
            display.innerText = "";
        }
        display.innerText += item.id;
    }
  };
});





  
  

  
