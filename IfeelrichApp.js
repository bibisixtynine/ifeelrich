/*import {newElement} from '/libs/ui.js'

class IfeelRichApp {
  constructor(paramters = {uiDiv:document.body, initialBalance:619.78, operationsTable:{} }) {
    this.uiDiv = paramters.uiDiv
    this.operations = paramters.operationsTable;
    this.ui = {};
    this.initialBalance = paramters.initialBalance;

    this.createTopDiv();
    this.createOperationsDiv();
    this.createBottomDiv();
  }

  /////////////////////////////////////////////////////////////
  //
  createTopDiv() {
    this.ui.totalEl = newElement({class:"text-3xl rounded border-2 border-white m-1 p-1"})
    this.ui.totalEl.innerText = "0.00"
    this.uiDiv.appendChild(this.ui.totalEl)
  }

  /////////////////////////////////////////////////////////////
  //
  createOperationsDiv() {
    this.operations.forEach((currentOperation) => {
      this.ui.totalEl.innerText = (parseFloat(this.ui.totalEl.innerText) + parseFloat(currentOperation.amount)).toFixed(2);

      const blockEl = newElement({ class:"operationBlock border-2 border-green-500 m-1.5 p-1.5 rounded-md"});
      this.uiDiv.appendChild(blockEl)

      // 1) date
      const dateEl = newElement({
        class: "inline-block border-2 m-1 p-1 rounded-md",
        contentEditable: "true",
        text: currentOperation.date
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

      amountEl.addEventListener('input', function(event) {
        const el = event.srcElement;
        const newAmount = parseFloat(el.innerText) ? parseFloat(el.innerText) : 0;
        const oldAmount = parseFloat(currentOperation.amount) ? parseFloat(currentOperation.amount) : 0;
        const diff = newAmount - oldAmount;
        if (diff) 
          this.ui.totalEl.innerText = (parseFloat(this.ui.totalEl.innerText) + diff).toFixed(2);
        if (parseFloat(el.innerText)>0) {
            el.className = "inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-green-500 text-black font-bold"
        } else {
            el.className = "inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black text-white font-thin"
        }
        currentOperation.amount = el.innerText;
      }.bind(this));

      // 3) description
      const descriptionEl = newElement({contentEditable:"true", class:"inline-block border-2 border-green-400 m-1 p-1 rounded-md" , text: currentOperation.description})
      blockEl.appendChild(descriptionEl)

    });
  }
  
  /////////////////////////////////////////////////////////////
  //
  createBottomDiv() {
    this.ui.initialBalanceEl = newElement({contentEditable:"true", class:"text-3xl rounded border-2 border-white m-1 p-1"})
    this.ui.initialBalanceEl.innerText = this.initialBalance.toFixed(2)
    this.ui.totalEl.innerText = (parseFloat(this.ui.totalEl.innerText) + this.initialBalance).toFixed(2);
    this.uiDiv.appendChild(this.ui.initialBalanceEl)
    
    this.ui.initialBalanceEl.addEventListener('input', function(event) {
      const el = event.srcElement;
      const newAmount = parseFloat(el.innerText) ? parseFloat(el.innerText) : 0;
      const oldAmount = this.initialBalance
      const diff = newAmount - oldAmount;
      if (diff) {
        this.ui.totalEl.innerText = (parseFloat(this.ui.totalEl.innerText) + diff).toFixed(2);
        this.initialBalance = newAmount;
      }  

    }.bind(this));
  }
}

export {IfeelRichApp}
*/


import {newElement} from '/libs/ui.js'

// Data management class
class FinancialData {
  constructor(initialBalance = 619.78, operations = []) {
    this.initialBalance = initialBalance;
    this.operations = operations;
    this.currentBalance = initialBalance;
  }

  updateOperation(newAmount, oldAmount) {
    this.currentBalance = (this.currentBalance - oldAmount + newAmount);
  }

  updateInitialBalance(newBalance) {
    this.currentBalance = this.currentBalance - this.initialBalance + newBalance;
    this.initialBalance = newBalance;
  }

  addOperation(operation) {
    this.operations.push(operation);
    this.currentBalance += parseFloat(operation.amount);
  }

  getCurrentBalance() {
    return this.currentBalance.toFixed(2);
  }
}

class IfeelRichApp {
  constructor(paramters = {uiDiv:document.body, initialBalance:619.78, operationsTable:{} }) {
    this.uiDiv = paramters.uiDiv
    this.financialData = new FinancialData(paramters.initialBalance, Object.values(paramters.operationsTable));
    this.ui = {};

    this.createTopDiv();
    this.createOperationsDiv();
    this.createBottomDiv();
  }

  createTopDiv() {
    this.ui.totalEl = newElement({class:"text-3xl rounded border-2 border-white m-1 p-1"})
    this.ui.totalEl.innerText = this.financialData.getCurrentBalance();
    this.uiDiv.appendChild(this.ui.totalEl)
  }

  createOperationsDiv() {
    this.financialData.operations.forEach((currentOperation) => {

      const blockEl = newElement({ class:"operationBlock border-2 border-green-500 m-1.5 p-1.5 rounded-md"});
      this.uiDiv.appendChild(blockEl)

      // Date
      const dateEl = newElement({
        class: "inline-block border-2 m-1 p-1 rounded-md",
        contentEditable: "true",
        text: currentOperation.date
      });  
      blockEl.appendChild(dateEl)

      // Amount
      const amount = parseFloat(currentOperation.amount).toFixed(2);
      let amountEl;
      if (amount < 0)
        amountEl = newElement({contentEditable:"true",  text: amount, class:"inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black text-white font-thin"});
      else
        amountEl = newElement({contentEditable:"true",  text: amount, class:"inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-green-500 text-black font-bold"});

      blockEl.appendChild(amountEl); 

      amountEl.addEventListener('input', function(event) {
        const el = event.srcElement;
        const newAmount = parseFloat(el.innerText) || 0;
        const oldAmount = parseFloat(currentOperation.amount) || 0;
        this.financialData.updateOperation(newAmount, oldAmount);
        currentOperation.amount = newAmount;
        this.ui.totalEl.innerText = this.financialData.getCurrentBalance();
        el.className = newAmount > 0 ? "inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-green-500 text-black font-bold" : "inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black text-white font-thin";
      }.bind(this));

      // Description
      const descriptionEl = newElement({
        contentEditable: "true", 
        class: "inline-block border-2 border-green-400 m-1 p-1 rounded-md",
        text: currentOperation.description
      });
      blockEl.appendChild(descriptionEl);

    });

    // Adjust total balance for UI
    this.ui.totalEl.innerText = this.financialData.getCurrentBalance();
  }

  createBottomDiv() {
    this.ui.initialBalanceEl = newElement({contentEditable:"true", class:"text-3xl rounded border-2 border-white m-1 p-1"})
    this.ui.initialBalanceEl.innerText = this.financialData.initialBalance.toFixed(2);
    this.uiDiv.appendChild(this.ui.initialBalanceEl)
    
    this.ui.initialBalanceEl.addEventListener('input', function(event) {
      const el = event.srcElement;
      const newBalance = parseFloat(el.innerText) || 0;
      this.financialData.updateInitialBalance(newBalance);
      this.ui.totalEl.innerText = this.financialData.getCurrentBalance();
    }.bind(this));
  }
}

export {IfeelRichApp}