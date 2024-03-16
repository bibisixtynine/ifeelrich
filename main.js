import {N26} from '/libs/n26csv.js'
import {appTests} from '/libs/appTests.js'
import {IfeelRichApp} from '/IfeelrichApp.js'

appTests()

const operationsTable = []
const N26Operations = JSON.parse( N26.getJSON() ).reverse()

N26Operations.forEach((n26Operation) => {
  const currentOperation = {amount: parseFloat(n26Operation['Montant (EUR)']), description: n26Operation['Bénéficiaire'], date: n26Operation['Date']}
  operationsTable.push(currentOperation);
})

const financeUI1 = new IfeelRichApp({uiDiv:document.body, initialBalance:619.78, operationsTable:operationsTable })
