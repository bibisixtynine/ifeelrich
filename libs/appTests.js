import { newElement } from '/libs/ui.js';

function appTests() {
  const el = newElement({ class:"border-2 border-green-500 m-1.5 p-1.5 rounded-md" });
  el.appendChild( newElement( {contentEditable:"true", text:"Hello World", class:"inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black"} ))
  el.appendChild( newElement( {contentEditable:"true", text:"Hello World", class:"inline-block border-2 border-green-500 m-1 p-1 rounded-md bg-black"} ))
  document.body.appendChild(el)

  for (let i=0; i<10; i++) 
    document.body.appendChild(newElement())
}

export { appTests }