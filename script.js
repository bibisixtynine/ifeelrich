const N26Operations = csvToObject(`
"Date","Bénéficiaire","Numéro de compte","Type de transaction","Référence de paiement","Montant (EUR)","Montant (Devise étrangère)","Sélectionnez la devise étrangère","Taux de conversion"
"2024-01-01","STACKBLITZ","","Paiement par MasterCard","-","-8.15","-9.0","USD","0.9055555556"
"2024-01-01","Revolut**1097*","","Paiement par MasterCard","-","-200.0","-200.0","EUR","1.0"
"2024-01-02","Amazon Prime*SC7PH97T5","","Paiement par MasterCard","-","-6.99","-6.99","EUR","1.0"
"2024-01-03","SAS SODISBP","","Paiement par MasterCard","-","-11.54","-11.54","EUR","1.0"
"2024-01-03","SAS SAS SESMAP","","Paiement par MasterCard","-","-110.84","-110.84","EUR","1.0"
"2024-01-03","MC DONALD'S","","Paiement par MasterCard","-","-16.25","-16.25","EUR","1.0"
"2024-01-03","FRESH","","Paiement par MasterCard","-","-31.07","-31.07","EUR","1.0"
"2024-01-03","MC DONALD'S","","Paiement par MasterCard","-","-4.4","-4.4","EUR","1.0"
"2024-01-04","Jerome Binachon","FR7628233000015372486193039","Revenus","Envoye depuis Revolut","280.0","","",""
"2024-01-04","SAS SAS SESMAP","","Paiement par MasterCard","-","-16.62","-16.62","EUR","1.0"
"2024-01-04","AEROPORT GDOUEST","","Paiement par MasterCard","-","-8.8","-8.8","EUR","1.0"
"2024-01-05","Revolut**1097*","","Paiement par MasterCard","-","-100.0","-100.0","EUR","1.0"
"2024-01-05","CHATGPT SUBSCRIPTION","","Paiement par MasterCard","-","-22.03","-24.0","USD","0.9179166667"
"2024-01-05","CAF DE LOIRE ATLANTIQUE","FR6840031000010000142225S19","Revenus","2020120TBINACHON 122023ME","559.13","","",""
"2024-01-05","Laetitia Cordier","FR7630047141620002128070109","Virement","loyer janv et edf et sante bonheur","-316.5","","",""
"2024-01-05","N26","","Virement","Commission sur les virements instantanés","-0.99","","",""
"2024-01-06","MONDIAL RELAY","","Paiement par MasterCard","-","-17.4","-17.4","EUR","1.0"
"2024-01-06","GITHUB, INC.","","Paiement par MasterCard","-","-9.18","-10.0","USD","0.918"
"2024-01-06","SAS SOJADIS","","Paiement par MasterCard","-","-3.61","-3.61","EUR","1.0"
"2024-01-06","BUREAU VALLEE  0423074","","Paiement par MasterCard","-","-12.46","-12.46","EUR","1.0"
"2024-01-06","EAU VIVE","","Paiement par MasterCard","-","-22.22","-22.22","EUR","1.0"
"2024-01-06","BUREAU VALLEE  0423074","","Paiement par MasterCard","-","-3.39","-3.39","EUR","1.0"
"2024-01-06","BUREAU VALLEE  0423074","","Paiement par MasterCard","-","-32.38","-32.38","EUR","1.0"
"2024-01-06","MR BRICOLAGE","","Paiement par MasterCard","-","-33.0","-33.0","EUR","1.0"
"2024-01-06","MC DONALD'S","","Paiement par MasterCard","-","-16.4","-16.4","EUR","1.0"
"2024-01-07","SAS SAS SESMAP","","Paiement par MasterCard","-","-25.93","-25.93","EUR","1.0"
"2024-01-09","SAS SAS SESMAP","","Paiement par MasterCard","-","-51.31","-51.31","EUR","1.0"
"2024-01-10","VERCEL DOMAINS","","Paiement par MasterCard","-","-18.33","-20.0","USD","0.9165"
"2024-01-10","UFC QUE CHOISIR","","Paiement par MasterCard","-","-6.99","-6.99","EUR","1.0"
"2024-01-10","VERCEL DOMAINS","","Paiement par MasterCard","-","-18.33","-20.0","USD","0.9165"
"2024-01-11","EAU VIVE","","Paiement par MasterCard","-","-13.48","-13.48","EUR","1.0"
"2024-01-12","MONDIAL RELAY","","Paiement par MasterCard","-","-15.0","-15.0","EUR","1.0"
"2024-01-12","VERCEL DOMAINS","","Paiement par MasterCard","-","-18.32","-20.0","USD","0.916"
"2024-01-12","VERCEL DOMAINS","","Paiement par MasterCard","-","-18.32","-20.0","USD","0.916"
"2024-01-12","SAS SAS SESMAP","","Paiement par MasterCard","-","-6.93","-6.93","EUR","1.0"
"2024-01-12","Amazon Prime*7U8TR4ZO5","","Paiement par MasterCard","-","-6.99","-6.99","EUR","1.0"
"2024-01-12","LA VIE CLAIRE","","Paiement par MasterCard","-","-43.66","-43.66","EUR","1.0"
"2024-01-13","GUMRD.COM* EMANUELE FE","","Paiement par MasterCard","-","-9.88","-10.8","USD","0.9148148148"
"2024-01-15","REPLIT, INC.","","Paiement par MasterCard","-","-18.29","-20.0","USD","0.9145"
"2024-01-16","MACIF CTRE OUEST","","Paiement par MasterCard","-","-100.2","-100.2","EUR","1.0"
"2024-01-17","GLITCH BOOSTED APPS","","Paiement par MasterCard","-","-9.21","-10.0","USD","0.921"
"2024-01-19","Amazon.fr*P199Y84A5","","Paiement par MasterCard","-","-7.95","-7.95","EUR","1.0"
"2024-01-21","STACKBLITZ","","Paiement par MasterCard","-","-8.3","-9.0","USD","0.9222222222"
"2024-01-27","FDJ","","Paiement par MasterCard","-","-5.0","-5.0","EUR","1.0"
"2024-01-29","MME VEYRUNES MYRIAM","FR7616807001303633447719662","Revenus","Virement de Mme Veyrunes Myriam","250.0","","",""
"2024-02-02","Prime Video","","Paiement par MasterCard","-","-7.99","-7.99","EUR","1.0"
"2024-02-02","SAS SAS SESMAP","","Paiement par MasterCard","-","-100.86","-100.86","EUR","1.0"
"2024-02-02","Revolut**1097*","","Paiement par MasterCard","-","-150.0","-150.0","EUR","1.0"
"2024-02-03","CARREFOUR CITY","","Paiement par MasterCard","-","-18.31","-18.31","EUR","1.0"
"2024-02-04","MAIRIE","","Paiement par MasterCard","-","-2.0","-2.0","EUR","1.0"
"2024-02-05","CAF DE LOIRE ATLANTIQUE","FR6840031000010000142225S19","Revenus","2020120TBINACHON 012024ME","559.13","","",""
"2024-02-06","GITHUB, INC.","","Paiement par MasterCard","-","-9.28","-10.0","USD","0.928"
"2024-02-06","Laetitia Cordier","FR7630047141620002128070109","Virement","loyer fevrier","-306.0","","",""
"2024-02-06","N26","","Virement","Commission sur les virements instantanés","-0.99","","",""
"2024-02-07","MC DONALD'S","","Paiement par MasterCard","-","-11.6","-11.6","EUR","1.0"
"2024-02-07","SAS SAS SESMAP","","Paiement par MasterCard","-","-87.94","-87.94","EUR","1.0"
"2024-02-08","FDJ","","Paiement par MasterCard","-","-5.0","-5.0","EUR","1.0"
"2024-02-10","EAU VIVE","","Paiement par MasterCard","-","-16.48","-16.48","EUR","1.0"
"2024-02-10","LA VIE CLAIRE","","Paiement par MasterCard","-","-39.61","-39.61","EUR","1.0"
"2024-02-10","SAS SAS SESMAP","","Paiement par MasterCard","-","-60.02","-60.02","EUR","1.0"
"2024-02-12","Amazon Prime*LL9G20QX5","","Paiement par MasterCard","-","-6.99","-6.99","EUR","1.0"
"2024-02-13","CARREFOUR CITY","","Paiement par MasterCard","-","-19.98","-19.98","EUR","1.0"
"2024-02-14","Jerome Binachon","FR7628233000015372486193039","Revenus","Envoye depuis Revolut","15.0","","",""
"2024-02-15","RESTAURATION COTE D","","Paiement par MasterCard","-","-10.1","-10.1","EUR","1.0"
"2024-02-15","REPLIT, INC.","","Paiement par MasterCard","-","-18.7","-20.0","USD","0.935"
"2024-02-27","MME VEYRUNES MYRIAM","FR7616807001303633447719662","Revenus","Virement de Mme Veyrunes Myriam","250.0","","",""
"2024-02-29","Amazon Prime*ZE3TQ5725","","Paiement par MasterCard","-","-6.99","-6.99","EUR","1.0"
"2024-02-29","Amazon Prime FR","","Paiement par MasterCard","-","2.94","2.94","EUR","1.0"
"2024-02-29","EAU VIVE","","Paiement par MasterCard","-","-33.32","-33.32","EUR","1.0"
"2024-02-29","MC DONALD'S","","Paiement par MasterCard","-","-10.7","-10.7","EUR","1.0"
"2024-03-02","Revolut**1097*","","Paiement par MasterCard","-","-170.0","-170.0","EUR","1.0"
"2024-03-02","Prime Video Channels","","Paiement par MasterCard","-","-7.99","-7.99","EUR","1.0"
"2024-03-05","CAF DE LOIRE ATLANTIQUE","FR6840031000010000142225S19","Revenus","2020120TBINACHON 022024ME","534.82","","",""
"2024-03-05","Laetitia Cordier","FR7630047141620002128070109","Virement","loyer mars 2024 jerome","-306.0","","",""
"2024-03-05","N26","","Virement","Commission sur les virements instantanés","-0.99","","",""
"2024-03-05","MC DONALD'S","","Paiement par MasterCard","-","-12.7","-12.7","EUR","1.0"
"2024-03-07","SAS SAS SESMAP","","Paiement par MasterCard","-","-23.33","-23.33","EUR","1.0"
"2024-03-08","NEWREST WAGONS LITS FR","","Paiement par MasterCard","-","-2.9","-2.9","EUR","1.0"
"2024-03-11","MACIF COA Production-MACIF","FR7630003015200006705791237","Prélèvement automatique","-PRELEV 0111032024 00469791702","-24.29","","",""
"2024-03-12","BKT","","Paiement par MasterCard","","-1.9","-1.9","EUR","1.0"
"2024-03-13","NEWREST WAGONS LITS FR","","Paiement par MasterCard","-","-13.1","-13.1","EUR","1.0"
"2024-03-13","SNCF","","Paiement par MasterCard","-","-66.0","-66.0","EUR","1.0"
"2024-03-13","AQUASIS","","Paiement par MasterCard","-","-16.0","-16.0","EUR","1.0"
"2024-03-13","AQUASIS","","Paiement par MasterCard","-","-10.0","-10.0","EUR","1.0"
"2024-03-13","CA DE LA REGION","","Paiement par MasterCard","-","-20.0","-20.0","EUR","1.0"
"2024-03-13","BKT","","Paiement par MasterCard","-","-8.7","-8.7","EUR","1.0"
"2024-03-15","REPLIT, INC.","","Paiement par MasterCard","-","-18.38","-20.0","USD","0.919"`)
.reverse()


//////////////////////////////////////////////////////////////////////
//
// some tests
//
const el = newElement({ border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px" });
el.appendChild( newElement( {contentEditable:"true", display:"inline-block", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px", text:"Hello World"} ))
el.appendChild( newElement( {contentEditable:"true", display:"inline-block", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px", text:"Hello World"} ))
document.body.appendChild(el)

for (i=0; i<10; i++) 
  document.body.appendChild(newElement())
//
// some tests
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// operations table generation from json
//
const operations = [];
const operation = {date: formatDate(new Date()), name:"toto", amount: 0, description: ""}

  N26Operations.forEach((n26Operation, index) => {
  const curentOperation = {amount: parseFloat(n26Operation['Montant (EUR)']), description: n26Operation['Bénéficiaire'], date: n26Operation['Date']}
  operations.push(curentOperation);
})
//
// operations table generation
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// UI - 1) top div : current balance
//
const totalEl = newElement({fontSize:"30px",borderRadius:"5px", border:"2px solid ivory", margin:"5px", padding:"5px"})
totalEl.innerText = "0.00"
document.body.appendChild(totalEl)
//
// top div : current balance
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// UI - 2) operations div
//
operations.forEach((currentOperation, index) => {
  totalEl.innerText = (parseFloat(totalEl.innerText) + parseFloat(currentOperation.amount)).toFixed(2);

  const blockEl = newElement({ border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px" });
  document.body.appendChild(blockEl)

  // amount
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
      totalEl.innerText = (parseFloat(totalEl.innerText) + diff).toFixed(2);
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

  // description
  const descriptionEl = newElement({display:"inline-block" ,contentEditable:"true", border:"2px solid lime" ,margin:"5px", padding:"5px", borderRadius:"5px", text: currentOperation.description})
  blockEl.appendChild(descriptionEl)

  // date
  const dateEl = newElement({display:"inline-block" ,contentEditable:"true", border:"2px solid" ,margin:"5px", padding:"5px", borderRadius:"5px", text: currentOperation.date})
  blockEl.appendChild(dateEl)

});
//
// operations div
//
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//
// UI - 3) bottom div : initial balance
//
let initialBalance = 619.78;
const initialBalanceEl = newElement({contentEditable:"true", fontSize:"30px",borderRadius:"5px", border:"2px solid ivory", margin:"5px", padding:"5px"})
initialBalanceEl.innerText = initialBalance.toFixed(2)
totalEl.innerText = (parseFloat(totalEl.innerText) + initialBalance).toFixed(2);
document.body.appendChild(initialBalanceEl)
initialBalanceEl.addEventListener('input', function() {
  const newAmount = parseFloat(this.innerText) ? parseFloat(this.innerText) : 0;
  const oldAmount = initialBalance
  const diff = newAmount - oldAmount;
  if (diff) {
    totalEl.innerText = (parseFloat(totalEl.innerText) + diff).toFixed(2);
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

function randomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia', 'Kevin', 'Luna', 'Mason', 'Nora', 'Oliver', 'Piper', 'Quinn', 'Ryan', 'Sophia', 'Tyler', 'Uma', 'Violet', 'Wesley', 'Xander', 'Yara', 'Zane', 'Aaron', 'Beth', 'Caleb', 'Daisy', 'Eli'];
  return names[Math.floor(Math.random() * names.length)];
}

function randomDescription() {
  const descriptions = ['is a loyal dog', 'is a friendly cat', 'is a smart bird', 'is a playful fish', 'is a curious hamster', 'is a sweet turtle', 'is a brave lion', 'is a kind owl', 'is a clever monkey', 'is a smart panda', 'is a playful koala', 'is a friendly dolphin', 'is a curious penguin', 'is a sweet tiger', 'is a brave elephant', 'is a kind giraffe', 'is a clever kangaroo', 'is a smart pig', 'is a playful platypus', 'is a friendly seal', 'is a curious dolphin', 'is a sweet tiger', 'is a brave elephant', 'is a kind giraffe', 'is a clever kangaroo', 'is a smart pig', 'is a playful platypus', 'is a friendly seal', 'is a curious dolphin', 'is a sweet tiger']
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function csvToObject(csv) {
  const lines = csv.split("\n");
  // Assume la première ligne contient les en-têtes
  const keys = lines[1].split(",");
  const result = [];
  for(let i = 2; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].match(/("[^"]+"|[^,]+)/g).map(field => field.replace(/^"|"$/g, ''));
    for(let j = 0; j < keys.length; j++) {
      try {
      const key = keys[j].replace(/"/g, '')
      const value = currentline[j].replace(/"/g, '')
      obj[key] = value;
      } catch(e) {
        console.log(e)
        debugger
      }
    }
    result.push(obj);
  }

  // Convertir en JSON
  return result;
}


function newElement(options = {border:"1px solid red", text:"Hello World", random: true}) {
  const div = document.createElement('div');
  if (!options.random) {
    if (options.border) div.style.border = options.border;
    if (options.text) div.innerText = options.text;
    if (options.id) div.id = options.id;
    if (options.class) div.className = options.class;
    if (options.padding) div.style.padding = options.padding;
    if (options.margin) div.style.margin = options.margin;
    if (options.borderRadius) div.style.borderRadius = options.borderRadius;
    if (options.backgroundColor) div.style.backgroundColor = options.backgroundColor;
    if (options.color) div.style.color = options.color;
    if (options.fontSize) div.style.fontSize = options.fontSize;
    if (options.fontWeight) div.style.fontWeight = options.fontWeight;
    if (options.fontStyle) div.style.fontStyle = options.fontStyle;
    if (options.textAlign) div.style.textAlign = options.textAlign;
    if (options.textDecoration) div.style.textDecoration = options.textDecoration;
    if (options.textTransform) div.style.textTransform = options.textTransform;
    if (options.letterSpacing) div.style.letterSpacing = options.letterSpacing;
    if (options.wordSpacing) div.style.wordSpacing = options.wordSpacing;
    if (options.lineHeight) div.style.lineHeight = options.lineHeight;
    if (options.textShadow) div.style.textShadow = options.textShadow;
    if (options.boxShadow) div.style.boxShadow = options.boxShadow;
    if (options.cursor) div.style.cursor = options.cursor;
    if (options.display) div.style.display = options.display;
    if (options.visibility) div.style.visibility = options.visibility;
    if (options.position) div.style.position = options.position;
    if (options.top) div.style.top = options.top;
    if (options.right) div.style.right = options.right;
    if (options.bottom) div.style.bottom = options.bottom;
    if (options.left) div.style.left = options.left;
    if (options.width) div.style.width = options.width;
    if (options.height) div.style.height = options.height;
    if (options.minWidth) div.style.minWidth = options.minWidth;
    if (options.maxWidth) div.style.maxWidth = options.maxWidth;
    if (options.minHeight) div.style.minHeight = options.minHeight;
    if (options.maxHeight) div.style.maxHeight = options.maxHeight;
    if (options.overflow) div.style.overflow = options.overflow;
    if (options.overflowX) div.style.overflowX = options.overflowX;
    if (options.overflowY) div.style.overflowY = options.overflowY;
    if (options.zIndex) div.style.zIndex = options.zIndex;
    if (options.opacity) div.style.opacity = options.opacity;
    if (options.display) div.style.display = options.display;
    if (options.contentEditable) div.contentEditable = options.contentEditable;

  } else {
    div.style.border = "1px solid red";
    div.innerText = randomName();
    div.id = "random";
    div.className = "random";
    div.style.backgroundColor = "lime"
    div.style.color = "black"
    div.style.fontWeight = "700"
    div.style.margin = "5px";
    div.style.padding = "2px";
    div.style.border = "2px solid lime";
    div.style.borderRadius = "20px";
    div.style.display = "inline-block";
    div.contentEditable = "true";
  }

  return div;
}
//
// Tools
//
//////////////////////////////////////////////////////////////////////