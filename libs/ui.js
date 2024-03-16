function randomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia', 'Kevin', 'Luna', 'Mason', 'Nora', 'Oliver', 'Piper', 'Quinn', 'Ryan', 'Sophia', 'Tyler', 'Uma', 'Violet', 'Wesley', 'Xander', 'Yara', 'Zane', 'Aaron', 'Beth', 'Caleb', 'Daisy', 'Eli'];
  return names[Math.floor(Math.random() * names.length)];
}


function newElement(options = {random: true}) {
  const div = document.createElement('div');
  if (!options.random) {
    if (options.text) div.innerText = options.text;
    if (options.id) div.id = options.id;
    if (options.class) div.className = options.class;
    if (options.contentEditable) div.contentEditable = options.contentEditable;

  } else {
    div.innerText = randomName();
    div.id = "random";
    div.className = "bg-green-500 text-black font-bold text-xs m-1 p-1 border-green-500 rounded-xl inline-block"
  }

  return div;
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

export { newElement }