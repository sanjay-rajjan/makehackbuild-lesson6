var currentHealth = 100;
var health = document.getElementById("health");
var colorChange = document.getElementById("name");
 

function attack(){
  health.innerHTML = currentHealth;
  currentHealth = currentHealth - 10;
colorChange.style.color = "red";

if (currentHealth <= 0 || currentHealth >= 90){
  currentHealth = 0;
 // document.getElementById("demo").innerHTML = "You win!"
 
  }  
}

//as I click button subtract total health by 20
//currentHealth - 20

/*
== egauls assign

>= greater and equal

<= less and equal

!=

& means nothing

&& means AND

| means nothing

|| means OR


*/