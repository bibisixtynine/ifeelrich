const n26csv = `
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
"2024-03-15","REPLIT, INC.","","Paiement par MasterCard","-","-18.38","-20.0","USD","0.919"`

function csvToJSON(csv) {
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
  return JSON.stringify(result);
}

const N26 = {}
N26.getJSON = function() {
  return csvToJSON(n26csv)
}

export { N26 };