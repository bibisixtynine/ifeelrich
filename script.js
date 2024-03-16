import {N26} from './n26csv.js'
import {newElement} from './ui.js'
import {appTests} from './appTests.js'


//////////////////////////////////////////////////////////////////////
//
// some tests
//
appTests()
//
// some tests
//
//////////////////////////////////////////////////////////////////////

class App {
  constructor() {
    this.n26 = new N26()
    this.ui = {}
    this.operations = []
    this.initialBalance = 619.78
    this.initialBalanceEl = newElement({
      contentEditable: true,
      display: 'inline-block',
      border: '2px solid lime',
      margin: '5px',
      padding: '5px',
      borderRadius: '5px',
      text: this.initialBalance
    })
    this.ui.initialBalanceEl = this.initialBalanceEl
    this.totalEl = newElement({
      contentEditable: true,
      display: 'inline-block',
      border: '2px solid lime',
      margin: '5px',
      padding: '5px',
      borderRadius: '5px',
      text: this.initialBalance
    })
  }
}


const operations = [];
const ui = {}
let initialBalance = 619.78;


//////////////////////////////////////////////////////////////////////
//
// {operations} table generation from N26Operations
//
{
  const N26Operations = JSON.parse( N26.getJSON() ).reverse()

  N26Operations.forEach((n26Operation) => {
    const curentOperation = {amount: parseFloat(n26Operation['Montant (EUR)']), description: n26Operation['Bénéficiaire'], date: n26Operation['Date']}
    operations.push(curentOperation);
  })
}
//
// {operations} table generation
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// UI - 1) top div : current balance
//
ui.totalEl = newElement({class:"text-3xl rounded border-2 border-white m-1 p-1"})
ui.totalEl.innerText = "0.00"
document.body.appendChild(ui.totalEl)
//
// top div : current balance
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// UI - 2) operations div
//
operations.forEach((currentOperation) => {
  ui.totalEl.innerText = (parseFloat(ui.totalEl.innerText) + parseFloat(currentOperation.amount)).toFixed(2);

  const blockEl = newElement({ class:"operationBlock border-2 border-green-500 m-1.5 p-1.5 rounded-md"});
  document.body.appendChild(blockEl)

  // 1) date
  const dateEl = newElement({
    class: "inline-block border-2 m-1 p-1 rounded-md", // Tailwind CSS classes
    contentEditable: "true", // Setting the contentEditable attribute
    text: currentOperation.date // Setting the text content of the element
  });  
  blockEl.appendChild(dateEl)
  
  // 2) amount
  const amount = currentOperation.amount.toFixed(2)
  let amountEl
  if (amount<0)
    amountEl = newElement({contentEditable:"true",  text: amount, class:"inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black text-white font-thin"});
  else
    amountEl = newElement({contentEditable:"true",  text: amount, class:"inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-green-500 text-black font-bold"});

  blockEl.appendChild(amountEl)  

  amountEl.addEventListener('input', function() {
    const newAmount = parseFloat(this.innerText) ? parseFloat(this.innerText) : 0;
    const oldAmount = parseFloat(currentOperation.amount) ? parseFloat(currentOperation.amount) : 0;
    const diff = newAmount - oldAmount;
    if (diff) 
      ui.totalEl.innerText = (parseFloat(ui.totalEl.innerText) + diff).toFixed(2);
    if (parseFloat(this.innerText)>0) {
      this.className = "inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-green-500 text-black font-bold"
    } else {
      this.className = "inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black text-white font-thin"

    }
    currentOperation.amount = this.innerText;
  });

  // 3) description
  const descriptionEl = newElement({contentEditable:"true", class:"inline-block border-2 border-green-400 m-1 p-1 rounded-md" , text: currentOperation.description})
  blockEl.appendChild(descriptionEl)

});
//
// operations div
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// UI - 3) bottom div : initial balance
//
ui.initialBalanceEl = newElement({contentEditable:"true", class:"text-3xl rounded border-2 border-white m-1 p-1"})
ui.initialBalanceEl.innerText = initialBalance.toFixed(2)
ui.totalEl.innerText = (parseFloat(ui.totalEl.innerText) + initialBalance).toFixed(2);
document.body.appendChild(ui.initialBalanceEl)
ui.initialBalanceEl.addEventListener('input', function() {
  const newAmount = parseFloat(this.innerText) ? parseFloat(this.innerText) : 0;
  const oldAmount = initialBalance
  const diff = newAmount - oldAmount;
  if (diff) {
    ui.totalEl.innerText = (parseFloat(ui.totalEl.innerText) + diff).toFixed(2);
    initialBalance = newAmount;
  }  

});
//
// bottom div : initial balance
//
//////////////////////////////////////////////////////////////////////

