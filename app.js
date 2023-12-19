let roll = () =>{
    let diceNo = document.getElementById('dice');
    let diceSound = document.getElementById('dice-sound')
    diceSound.play();
    
    let random = Math.floor(Math.random()*6);
    diceNo.innerText='';
    
    diceNo.classList.add('animate');

    setTimeout(() => {
         diceNo.classList.remove('animate')
         diceNo.innerText=random+1;
    }, 1000);
}







