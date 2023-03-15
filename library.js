function reset(){
    for(let i=1 ;i<=52; i++){
     document.getElementById(`${i}`).style.display="block"
    }
 }
   function hide(param) {
     document.getElementById(param).style.display = "none";
   }