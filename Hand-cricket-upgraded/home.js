let score = 0;
let Tar = 0;
let comScore = 0;
let first = true;
let ufirst = true;
let out = false;
let cwin = false;
let pwin = false;
let equal = false;
function clickedMe(no){
    let UserChoise = document.getElementById('UserChoise');
    let Board = document.getElementById('scr');
    let u = Math.floor(Math.random()*6);
    let r = u + 1;
    UserChoise.innerHTML = no;
    if(out==false){
        if(ufirst==true){
            ufirst = false;
            Board.classList.add('upos');
        }
        AIfunc(no,r);
    }
    else{
        if(first==true){
            first = false;
            Board.classList.remove('cen');
            Board.classList.add('out');
        }
        bowling(no,r);
    }    
}
function AIfunc(uno,r){  
    let ComChoise = document.getElementById('ComChoise'); 
    let Score = document.getElementById('Score');
    let target = document.getElementById('target');
    let Board = document.getElementById('scr');
    let batOrBall = document.getElementById('batOrBall');
    ComChoise.innerHTML = r; 
    if(uno!=r)
    {
        score = score + uno;
        Score.innerHTML = score;
    }
    else{
        let Board = document.getElementById('scr');
        Board.classList.remove('upos');
        Board.classList.add('cen');
        Board.classList.add('red-glow');
        Board.innerHTML="You are out ☝!!!";
        out = true;
        let s = score + 1;
        Tar = s;
        target.innerHTML = "target :" + s;
        batOrBall.innerHTML = "You are bowling!!!";
    } 
}

function bowling(uno,r){
    let ComChoise = document.getElementById('ComChoise');
    let target = document.getElementById('target');
    let Board = document.getElementById('scr');
    ComChoise.innerHTML = r;
    comScore = comScore + r;
    Board.classList.remove('red-glow');
    Board.innerHTML = "Score :" + comScore;
    if(cwin == false && pwin == false)
    {
        if(comScore > Tar){
            cwin = true;
            Board.classList.remove('out');
            Board.classList.add('cen');
            Board.classList.add('red-glow');
            Board.innerHTML = "Computer wins 😭!!!";
        }
        else if(comScore == Tar){
            equal = true;
        }
    }
    if(uno == r){
        if(equal == false){
            pwin = true;
            Board.classList.remove('out');
            Board.classList.add('cen');
            Board.classList.add('green-glow');
            Board.innerHTML = "Player wins 😍!!!";
        }
        else{
            Board.classList.remove('out');
            Board.classList.add('cen');
            Board.classList.add('yellow-glow');
            Board.innerHTML = "The score are equal 😐";
        }    
    } 
}
