document.getElementById('encoder').addEventListener('click',function(){
    //closing text decoder section
    document.getElementById('decoder').style.backgroundColor='rgb(60, 159, 235)';
    document.getElementById('decode-text-btn').style.backgroundColor='rgb(60, 159, 235)'; 
    document.getElementById('decode-section').style.display='none';
    document.getElementById('decoded-text-section').style.display='none';
    document.getElementById('decode-text').value = '';

    // opening text encoder section
    document.getElementById('encoder').style.backgroundColor='rgb(7, 41, 68)';
    document.getElementById('encode-section').style.display='flex';
});

document.getElementById('encode-text-btn').addEventListener('click',function(){   
    let text = document.getElementById('encode-text').value;
    if(text==''){
        alert('Please Enter Your Text');
    }
    else{        
        //changeing button color
        document.getElementById('encode-text-btn').style.backgroundColor='rgb(7, 41, 68)'; 
        //opening password section
        document.getElementById('password-section').style.display='flex';

        let encodePassword = randomPasswordGenerator();
        document.getElementById('encode-password').innerText = encodePassword;
        encode(text,encodePassword);
    }
});

function randomPasswordGenerator(){
    // creating random password which has 4 different digit
    let encodePassword = '';
    for (let i = 0; i < 4; i++) {
        let element = Math.round(Math.random() *9);
        function recurse() {
            if(encodePassword.includes(element)==false) {
                encodePassword = encodePassword+element;                  
            } else {
                element = Math.round(Math.random() *9);
                recurse();
            }
        }
        recurse();
    }
    return encodePassword;
}

function encode(text,encodePassword){
    encodePassword ='ⓐⓑⓒⓓ'+ encodePassword;
    document.getElementById('encoded-text').innerText= textChanger(text,encodePassword);
}


document.getElementById('decoder').addEventListener('click',function(){
    //closing text-encoder section
    document.getElementById('encoder').style.backgroundColor='rgb(60, 159, 235)';
    document.getElementById('encode-text-btn').style.backgroundColor='rgb(60, 159, 235)'; 
    document.getElementById('encode-section').style.display='none';
    document.getElementById('password-section').style.display='none';
    document.getElementById('encode-text').value = '';

    // opening text decoder section
    document.getElementById('decoder').style.backgroundColor='rgb(7, 41, 68)';
    document.getElementById('decode-section').style.display='flex';

});

document.getElementById('decode-text-btn').addEventListener('click',function(){   
    let text = document.getElementById('decode-text').value;
    let password = document.getElementById('decode-password').value;
    if(text==''){
        alert('Please Enter Your Text');
    }

    else if(password ==''){
        alert('Please Enter Password');
    }
    else{        
        //changeing button color
        document.getElementById('decode-text-btn').style.backgroundColor='rgb(7, 41, 68)'; 
        //opening after decoded section
        document.getElementById('decoded-text-section').style.display='flex';

        let decodePassword = document.getElementById('decode-password').value;
        document.getElementById('decode-password').value = decodePassword;
        decode(text,decodePassword)
    }

});
function decode(text,decodePassword){
    decodePassword = reverseText(decodePassword);
    decodePassword = decodePassword +'ⓓⓒⓑⓐ';
    console.log(decodePassword);
    document.getElementById('decoded-text').innerText= textChanger(text,decodePassword);
}

function textChanger(text,password){
    for (let i = 0; i < password.length; i++) {
        const digit = password.charAt(i);
        
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
            text = SwapLetter(text,'t','m');
        }
        else if(digit=='1'){
            text = SwapLetter(text,'a','*');
        }
        else if(digit=='2'){
            text = SwapLetter(text,'$','o');
        }
        else if(digit=='3'){
            text = SwapLetter(text,'s','N');
        }
        else if(digit=='4'){
            text = SwapLetter(text,'m','@');
        }
        else if(digit=='5'){
            text = SwapLetter(text,'h','r');
        }
        else if(digit=='6'){
            text = SwapLetter(text,'r','a');
        }
        else if(digit=='7'){
            text = SwapLetter(text,'$','n');
        }
        else if(digit=='8'){
            text = SwapLetter(text,'h','#');
        }
        else if(digit=='9'){
            text = SwapLetter(text,'d','t');
        }        
    }    
    return text;
}

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
