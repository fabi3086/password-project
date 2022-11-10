const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordLength = 15
let showPassword = document.getElementById("show-password")
let showPassword2 = document.getElementById("show-password2")

function passwords() {
    
    showPassword.textContent = ""
    showPassword2.textContent = ""
    
    for ( let i = 0; i < passwordLength; i ++) { 
        let randomNumber = Math.floor(Math.random() * characters.length)
        showPassword.textContent = showPassword.textContent + characters[randomNumber]
    }
    
    for ( let i = 0; i < passwordLength; i ++) { 
        let randomNumber = Math.floor(Math.random() * characters.length)
        showPassword2.textContent = showPassword2.textContent + characters[randomNumber]
    }
}





//Proyecto:
//Generar 2 claves al azar.
//Maximo 15 caracteres.
//paso1. crear un for loop dentro de una funcion-del 0 - 15- y crear una variable con el maximo numero de caracteres de la
//paso2. crear una variable utilizando Math.random y Math.floor lo cual me va a dar un numero aleatorio.
//paso3. colocar la variable creada dentro del const character para escoger el item dentro del array.
//paso4. crear en el HTML DOM un <p id="show-password"></p>
//paso5. llamar al DOM en el index.js. document.getElementById("") y asignar en una variable.
//paso6. mostrar en el HTML , .textContent la clave aleatoria.
//paso7. 