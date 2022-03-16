let array = []
let passwordCodes1 = []
let passwordCodes2 = []
let passwordCodes3 = []
let passwordCodes4 = []
let passwordArray = []
const uppercase = createArray(65, 90);
const lowercase =createArray(97,122);
const symbols = createArray(33,39);
const numbers = createArray(48, 57)
const firstInput = document.getElementById('input1')
const secondInput = document.getElementById('input2')
const thirdInput = document.getElementById('input3')
const fourthInput = document.getElementById('input4')
const genbutton = document.getElementById('genbutton')

/*
function renderPasswords(){
    genbutton.addEventListener('click', (e)=>{
        e.preventDefault();
       let firstPassword = generatePassword()
       let secondPassword = generatePassword()
       let thirdPassword = generatePassword()
       let fourthPassword = generatePassword()

        firstInput.textContent = firstPassword;
        secondInput.textContent = secondPassword;
        thirdInput.textContent = thirdPassword;
        fourthInput.textContent = fourthPassword;
        
        
    })  


    //let thirdPassword = generatePassword();
    //thirdInput.textContent = thirdPassword


}

renderPasswords();
*/

function renderPasswords(){

    
 generatePassword()
        firstInput.value = passwordArray[0];
        secondInput.value  = passwordArray[1];
        thirdInput.value  = passwordArray[2];
        fourthInput.value  = passwordArray[3];
        passwordArray = []
        passwordCodes1 = []
        passwordCodes2 = []
        passwordCodes3 = []
        passwordCodes4 = []
        passwordString1 = ''
        passwordString2 = ''
        passwordString3 = ''
        passwordString4 = ''


}



function createArray(low, high){
    
    for (let i = low; i < high; i++){
        array.push(i)
    }
    return array;
}

//console.log(array)






function generatePassword(){
    
    for(i = 0; i <13; i++){
    randomCode1 =array[ Math.floor(Math.random()*array.length)+1 ]
     passwordCodes1.push(String.fromCharCode(randomCode1))
    
   }
   for(i = 0; i <13; i++){
    randomCode2 =array[ Math.floor(Math.random()*array.length)+1 ]
     passwordCodes2.push(String.fromCharCode(randomCode2))
    
   }

   for(i = 0; i <13; i++){
    randomCode3 =array[ Math.floor(Math.random()*array.length)+1 ]
     passwordCodes3.push(String.fromCharCode(randomCode3))
    
   }

   for(i = 0; i <13; i++){
     randomCode4 =array[ Math.floor(Math.random()*array.length)+1 ]
     passwordCodes4.push(String.fromCharCode(randomCode4))
    
   }
    //passwordCodes.join('')
    let passwordString1 = passwordCodes1.join('')
    let passwordString2 = passwordCodes2.join('')
    let passwordString3 = passwordCodes3.join('')
    let passwordString4 = passwordCodes4.join('')
     passwordArray.push(passwordString1, passwordString2, passwordString3, passwordString4)
    
    
    console.log(passwordArray)
     
    
}

