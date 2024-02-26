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


separate("1");
separate("2");
separate("3");
separate("4");
separate("5");
separate("6");
separate("7");
separate("8");
separate("9");