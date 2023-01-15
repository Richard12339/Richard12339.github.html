function game(){  
 var game = Math.ceil(Math.random() * 5 )  
 var a=prompt('Which number you want?')  
 if(a == game){  
 alert('you win')  
 }  
 else{  
 alert('you lose, the right number is ' + game)  
 }  
 } 