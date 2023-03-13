const procesedText = document.getElementById("output");
const saveText = document.getElementById("savetext");


function highlight() {
    var inputText = document.getElementById("input_text");
    var text = inputText.value;
    var index = text.indexOf(text);

    /* itirate through each word in the text */
    var words = text.split(" ");  
    class_name = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        /* check if word ends with "a"x and dont end with vocal */
        if (word.endsWith("a", word.length - 1) ) {
            if (endWithVowel(word) ) {
            } else {
              class_name = "hl_green";
            }
        }

        /* check if word ends with "e"x */
        if (word.endsWith("e", word.length - 1)) {
            if (endWithVowel(word) ) {
            } else {
            class_name = "hl_yellow";
            }
        }
        
        /* check if word ends with "i"x */
        if (word.endsWith("i", word.length - 1)) {
            if (endWithVowel(word) ) {
            } else {
            class_name = "hl_pink";
            }
        }
        
        /* check if word ends with "o"x */
        if (word.endsWith("o", word.length - 1)) {
            if (endWithVowel(word) ) {
            } else {
            class_name = "hl_red";
            }
        }
      
        /* check if word ends with "u"x */
        if (word.endsWith("u", word.length - 1))  {
            if (endWithVowel(word) ) {
            } else {
            class_name = "hl_blue";
            }
        }

        /* check if word ends with "a" */
        if (word.endsWith("a")) {
            class_name = "hl_aqua";
        }

        /* check if word ends with "e" */
        if (word.endsWith("e")) {
            class_name = "hl_orange";
        }

        /* check if word ends with "i" */
        if (word.endsWith("i")) {
            class_name = "hl_purple";
        }

        /* check if word ends with "o" */ 
        if (word.endsWith("o")) {
            class_name = "hl_dark_blue";
        }
      
        /* check if word ends with "u" */
        if (word.endsWith("u")) {
            class_name = "hl_brown";
        }
      
        /* highlight the word  */
        var start = text.indexOf(word);
        var end = start + word.length;
        var span = document.createElement("span");
        span.className = class_name;
        span.innerHTML = word;
        /* append the span to procesedText */
        procesedText.appendChild(span);

        saveText.innerHTML += word + " ";

        inputText.value = "" 

    }
}

/* call highlight function when space */

document.onkeydown = function(evt) {
  /* catch spacebar or ented*/
  evt = evt || window.event;
  if (evt.keyCode == 32 || evt.keyCode == 13) {
    highlight();
  }

};


function endWithVowel(text) {
  if (text.endsWith("a") ) {
    return true;
  }
  if (text.endsWith("e") ) {
    return true;
  }
  if (text.endsWith("i") ) {
    return true;
  }
  if (text.endsWith("o") ) {
    return true;
  }
  if (text.endsWith("u") ) {
    return true;
  }
  return false;

}


function CopyToClipboard() {
    /* copy to clipboard the text in savetext.txt */  

    saveText.focus();
    saveText.select();

    console.log(saveText.value);
    document.execCommand("copy");

    alert("COPIA  ESTO --> " + saveText.value);

}
