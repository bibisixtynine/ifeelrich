import { newElement } from './ui.js';

function appTests() {
  const el = newElement({ border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px" });
  el.appendChild( newElement( {contentEditable:"true", display:"inline-block", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px", text:"Hello World"} ))
  el.appendChild( newElement( {contentEditable:"true", display:"inline-block", border:"2px solid lime", margin:"5px", padding:"5px", borderRadius:"5px", text:"Hello World"} ))
  document.body.appendChild(el)

  for (let i=0; i<10; i++) 
    document.body.appendChild(newElement())
}

export { appTests }