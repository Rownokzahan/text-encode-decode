document.getElementById('encoder').addEventListener('click',function(){
    //closing text decoder section
    document.getElementById('decoder').style.backgroundColor='rgb(60, 159, 235)';
    document.getElementById('decode-section').style.display='none';

    // opening text encoder section
    document.getElementById('encoder').style.backgroundColor='rgb(7, 41, 68)';
    document.getElementById('encode-section').style.display='flex';
});

document.getElementById('decoder').addEventListener('click',function(){
    //closing text encoder section
    document.getElementById('encoder').style.backgroundColor='rgb(60, 159, 235)';
    document.getElementById('encode-text-btn').style.backgroundColor='rgb(60, 159, 235)'; 
    document.getElementById('encode-section').style.display='none';
    document.getElementById('password-section').style.display='none';

    // opening text decoder section
    document.getElementById('decoder').style.backgroundColor='rgb(7, 41, 68)';
    document.getElementById('decode-section').style.display='flex';

});

document.getElementById('encode-text-btn').addEventListener('click',function(){   
    //opening password section
    document.getElementById('encode-text-btn').style.backgroundColor='rgb(7, 41, 68)'; 
    document.getElementById('password-section').style.display='flex';

    // creating random password which has 4 different digit
    let encodePassword = '';
    for (let i = 0; i < 4; i++) {
        let element = Math.round(Math.random() *9);
        function recurse() {
            if(encodePassword.includes(element)==false) {
                encodePassword = encodePassword+element;  
                
            } else {
                // console.log(element,'noooo');
                element = Math.round(Math.random() *9);
                recurse();
            }
        }
        recurse();
        // console.log(element,encodePassword);
    }
    document.getElementById('encode-password').innerText = encodePassword;
    // console.log('End  ');
});

document.getElementById('decode-text-btn').addEventListener('click',function(){   
    //opening decode card-header section
    document.getElementById('decode-text-btn').style.backgroundColor='rgb(7, 41, 68)'; 
    document.getElementById('decode-head').style.display='block';

});