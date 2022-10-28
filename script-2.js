
function enCode(text,encodePassword){
    encodePassword = encodePassword;
    for (let i = 0; i < encodePassword.length; i++) {
        const digit = encodePassword.charAt(i);
        
        if(digit=='ⓐ'){
            text = reverseText(text);
        }
        else if(digit=='ⓑ'){
            text = reverseWord(text);
        }
        else if(digit=='ⓒ'){
            text = reverseSentence(text);
        }
        else if(digit=='ⓓ'){
            text = swapCase(text);
        }
        else if(digit=='0'){
            text = SwapLetter(text,'e','t');
        }
        else if(digit=='1'){
            text = SwapLetter(text,'t','i');
        }
        else if(digit=='1'){
            text = SwapLetter(text,'a','e');
        }
        else if(digit=='2'){
            text = SwapLetter(text,'n','o');
        }
        else if(digit=='3'){
            text = SwapLetter(text,'s','n');
        }
        else if(digit=='4'){
            text = SwapLetter(text,'s','e');
        }
        else if(digit=='5'){
            text = SwapLetter(text,'h','r');
        }
        else if(digit=='6'){
            text = SwapLetter(text,'r','a');
        }
        else if(digit=='7'){
            text = SwapLetter(text,'d','n');
        }
        else if(digit=='8'){
            text = SwapLetter(text,'h','s');
        }
        else if(digit=='9'){
            text = SwapLetter(text,'d','t');
        }    
    
    }
    
    return text;
}

const demoText = enCode('I am Rownok. I am 22 years old','0123456789');
console.log(demoText);
const newText = enCode(demoText,'9876543210');
console.log(newText)



function reverseText(text){
    return text.split("").reverse().join("");
}

function reverseWord(text){
    return text.split(" ").reverse().join(" ");
}

function reverseSentence(text){
    return text.split(".").reverse().join(".");
}


function swapCase(text){
    let newText = [];

    for (i=0; i<text.length; i++) {
    if (text[i] == text[i].toLowerCase()) {
        newText[i] = text[i].toUpperCase();
    }
    else {
        newText[i] = text[i].toLowerCase();
    }
    }

    return newText.join("")
}

function SwapLetter(text, letter1, letter2){
    let newText = [];
    for (i=0; i<text.length; i++) {
        if (text[i] == letter1) {
            newText[i] = letter2;
        }
        else if (text[i] == letter2) {
            newText[i] = letter1;
        }
        else {
            newText[i] = text[i];
        }
    }
    return newText.join("")
}