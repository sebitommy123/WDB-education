
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("button");

let displayNumber = 0;
let operation = null;
let reservedNumber = null;

for(let i = 0; i < buttons.length; i++) {

  let button = buttons[i];

  button.onclick = evt => {

    if (!isNaN(parseInt(button.innerHTML))) {
      displayNumber = displayNumber * 10 + parseInt(button.innerHTML);
    }

    let attemptRunOperation = () => {
      if(operation) {
        console.log(`${reservedNumber}${operation}${displayNumber}`);
        displayNumber = eval(`${reservedNumber}${operation}${displayNumber}`);

        if(isNaN(displayNumber) || !isFinite(displayNumber) || displayNumber === null) {
          displayNumber = 0;
          alert("ERROR");
        }

        reservedNumber = null;
        operation = null;
      }
    }

    let moveToReserve = () => {
      attemptRunOperation();
      reservedNumber = displayNumber;
      displayNumber = 0;
    }

    switch(button.innerHTML) {
      case "←":
        displayNumber = Math.floor(displayNumber / 10);
        break;
      case "÷":
        moveToReserve();
        operation = "/";
        break;
      case "×":
        moveToReserve();
        operation = "*";
        break;
      case "-":
        moveToReserve();
        operation = "-";
        break;
      case "+":
        moveToReserve();
        operation = "+";
        break;
      case "=":
        attemptRunOperation();
        break;
      case "C":
        displayNumber = 0;
        operation = null;
        reservedNumber = null;
        break;
    }

    display.innerHTML = displayNumber;

  };

}

