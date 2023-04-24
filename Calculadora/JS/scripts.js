const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class calculator {
constructor(previousOperationText, currentOperationText){
this.previousOperationText = previousOperationText
this.currentOperationText = currentOperationText
this.currentoperation = ""
}
//add digit to calculator screen
adddigit(digit) {

//check if current operation already has a motherfucking dot or not

if(digit === "." && this.currentOperationText.innerText.includes(".")) {
    return;
}

this.currentoperation = digit
this.updatescreen()
}

// Process all the operations on this small thing.
processoperation(operation) {
 if (this.currentOperationText.innertext === "" && operation !=="C")
 {
if(this.previousOperationText !==""){
    this.changeOperation(operation);
}
return;
 }   



    
// Value before and after, the classic calc lore
let operationvalue
let previous = +this.previousOperationText.innerText.split(" ")[0];
let current = +this.currentOperationText.innertext;

switch(operation){
    case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperator();
        break;
      case "C":
        this.processClearOperator();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
}
}

//change values of the calculator screen
updatescreen(operationvalue = null,
     operation =null,
     current=null,
     previous=null,){
    
    console.log(operationvalue, operation, current, previous)

if(operationvalue === null)
{this.currentOperationText.innerText += this.currentoperation;
}
 else{
//check if value is zero, if it is just add current value
if(previous === 0) {
    operationvalue= current;
}

// add current value to the previous one
this.previousOperationText.innertext = `${operationvalue} ${operation}`;
this.currentOperationText.innertext = "";
  }
 }
}

const calc = new calculator (previousOperationText, currentOperationText);


buttons.forEach ((btn) => {
btn.addEventListener("click", (e) =>{
    const value = e.target.innerText;

    if(+value >= 0 || value === "." ){
        calc.adddigit(value);
    } else {
        calc.processoperation(value);
    }
});

})