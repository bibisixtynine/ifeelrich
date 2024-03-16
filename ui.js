function randomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia', 'Kevin', 'Luna', 'Mason', 'Nora', 'Oliver', 'Piper', 'Quinn', 'Ryan', 'Sophia', 'Tyler', 'Uma', 'Violet', 'Wesley', 'Xander', 'Yara', 'Zane', 'Aaron', 'Beth', 'Caleb', 'Daisy', 'Eli'];
  return names[Math.floor(Math.random() * names.length)];
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

export { newElement }