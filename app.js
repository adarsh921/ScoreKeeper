const select=document.querySelector("#range");
const inp1=document.querySelector("#pl1");
const inp2=document.querySelector("#pl2");
const score1=document.querySelector("#p1score");
const score2=document.querySelector("#p2score");
const reset=document.querySelector("#restart");
k1=0;
k2=0;
var winScore=select.value[0]; // when the page is refreshed and no range is selected then by default wining score is the first option.
select.addEventListener('change',function(){ //important piece of code please revise it.
     winScore=parseInt(this.value);
})
inp1.addEventListener("click",function(e){
    if(k1<=winScore)
    score1.innerText=`${++k1}`;
    if(k1==winScore){
         inp1.disabled=true;
         inp2.disabled=true;
         score1.classList.add("win");
         score2.classList.add("lose");
    }

})
inp2.addEventListener("click",function(e){
    if(k2<=winScore)
    score2.innerText=`${++k2}`; 
    if(k2==winScore){
        inp1.disabled=true;
        inp2.disabled=true;
        score1.classList.add("lose");
        score2.classList.add("win");

    }
})
reset.addEventListener("click",function(e){
    e.stopPropagation();
    inp1.disabled=false;
    inp2.disabled=false;
    score1.innerText="0";
    score2.innerText="0";
if(k1==winScore){
    score1.classList.remove("win");
    score2.classList.remove("lose");   
}
else{
    score1.classList.remove('lose');
    score2.classList.remove('win');
}
k1=0;
k2=0;  
})


