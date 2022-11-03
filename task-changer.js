document.getElementById('task-list').addEventListener('click',function(event){
    const textArea = document.getElementById('text');
    if(textArea.value==''){
        alert('Please type a text first');
    }

    else{
        event.target.style.backgroundColor='rgb(7, 41, 68)';
        const task =event.target.innerText;
        
        if(task =='Reverse Text'){
            const text = textArea.value
            textArea.value =reverseText(text);
        }
        
        else if(task =='Reverse Word'){
            const text = textArea.value
            textArea.value =reverseWord(text);
        }
    
        else if(task =='Reverse Sentence'){
            const text = textArea.value
            textArea.value =reverseSentence(text);
        }
    
        else if(task =='Swap Case'){
            const text = textArea.value
            textArea.value =swapCase(text);
        }
    }

    
});


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
