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
ui.totalEl = newElement({fontSize:"30px",borderRadius:"5px", border:"2px solid ivory", margin:"5px", padding:"5px"})
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

  const blockEl = newElement({ class:"operationBlock", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px" });
  document.body.appendChild(blockEl)

  // 1) date
  const dateEl = newElement({display:"inline-block" ,contentEditable:"true", border:"2px solid" ,margin:"5px", padding:"5px", borderRadius:"5px", text: currentOperation.date})
  blockEl.appendChild(dateEl)
  
  // 2) amount
  const amount = currentOperation.amount.toFixed(2)
  let amountEl
  if (amount<0)
    amountEl = newElement({fontWeight:"100", display:"inline-block" ,contentEditable:"true", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px", text: amount});
  else
    amountEl = newElement({fontWeight:"800", color: "black", backgroundColor: "lime", display:"inline-block" ,contentEditable:"true", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px", text: amount});

  blockEl.appendChild(amountEl)  

  amountEl.addEventListener('input', function() {
    const newAmount = parseFloat(this.innerText) ? parseFloat(this.innerText) : 0;
    const oldAmount = parseFloat(currentOperation.amount) ? parseFloat(currentOperation.amount) : 0;
    const diff = newAmount - oldAmount;
    if (diff) 
      ui.totalEl.innerText = (parseFloat(ui.totalEl.innerText) + diff).toFixed(2);
    if (parseFloat(this.innerText)>0) {
      this.style.backgroundColor = "lime"
      this.style.color = "black"
      this.style.fontWeight = "800"
    } else {
      this.style.backgroundColor = "black"
      this.style.color = "ivory"
      this.style.fontWeight = "100"
    }
    currentOperation.amount = this.innerText;
  });

  // 3) description
  const descriptionEl = newElement({display:"inline-block" ,contentEditable:"true", border:"2px solid lime" ,margin:"5px", padding:"5px", borderRadius:"5px", text: currentOperation.description})
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
ui.initialBalanceEl = newElement({contentEditable:"true", fontSize:"30px",borderRadius:"5px", border:"2px solid ivory", margin:"5px", padding:"5px"})
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
  if (parseFloat(this.innerText)>0) {
    this.style.backgroundColor = "lime"
    this.style.color = "black"
    this.style.fontWeight = "800"
  } else {
    this.style.backgroundColor = "black"
    this.style.color = "ivory"
    this.style.fontWeight = "100"
  }
});
//
// bottom div : initial balance
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// Tools
//
function formatDate(date) {
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}



/*
function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}

function getHighestVisibleDivInfo() {
  // Cible uniquement les div avec la classe 'operationBlock'
  const allDivs = document.querySelectorAll('div.operationBlock');
  let highestDivInfo = null;
  allDivs.forEach((div) => {
      if (isVisible(div)) {
          const rect = div.getBoundingClientRect();
          if (highestDivInfo === null || rect.top < highestDivInfo.position.top) {
              highestDivInfo = {element: div, position: {top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left}};
          }
      }
  });
  return highestDivInfo;
}
// Exemple d'utilisation
let toogle = true
setInterval(()=>{
  const highestVisibleDivInfo = getHighestVisibleDivInfo();
  console.log(highestVisibleDivInfo)
  toogle = !toogle
  if (toogle)
    highestVisibleDivInfo.element.style.backgroundColor = "red"
  else
    highestVisibleDivInfo.element.style.backgroundColor = "black"
  //
},1000)
const highestVisibleDivInfo = getHighestVisibleDivInfo();
*/
//
// Tools
//
//////////////////////////////////////////////////////////////////////