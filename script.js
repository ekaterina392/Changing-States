const separate = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText ="";
  
  text.forEach(letter=>{
    const span = document.createElement("span");
    span.className = "letter";
    
    span.innerText = letter;
    
    element.appendChild(span);
  });
}

separate("website");
separate("design");
separate("draw");
separate("tech");