
// This makes sure DOM is fully loaded before JS runs   "ye chatgpt ne function lga k diya h kyuki mera code kaam nhi kr rha  "
// document.addEventListener("DOMContentLoaded", function() {  yha pura js code eske bich m }); 
// ye problem esliye aayi thi kyuki mene js file ho head m link kr diya tha jo sahi nhi tha use hmesha body tag k baad hi link kro 

let allBoxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let popDiv = document.querySelector(".message")
let newgameBTN = document.querySelector(".newGameBtn")
let popMain = document.querySelector(".popUp")

let turn_0 = true; //ye help krega if condition m niche

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

allBoxes.forEach((bttn) => {
    bttn.addEventListener("click",() => {
      if(turn_0 === true){
        bttn.innerHTML = "X"
        bttn.style.backgroundColor = "red"
        turn_0 = false; //true se false pr set kr diya taki off hone pr 0 print kra ske
      }
      else{
        bttn.innerHTML = "0"
        bttn.style.backgroundColor = "Green"
        turn_0 = true; //yaani else wala complete ho jaye to fr ye true ho jaye, true hoga to if wali condition manega or false ho jayega To else ka kaam then true to if wala kaam Simple

      }
        bttn.disabled = true;
        winnerCheck();  
        // ye function bnaya niche h but call yha kr liya h taaki btn click krte hi sare pattern ko check kr ske
    })
})

resetBtn.addEventListener("click",() =>{
    window.location.reload(); //puri window reload ho jaegi
})



const winnerCheck = ()=>{
  for(let arr of winningPattern){
    // console.log(arr[0],arr[1],arr[2])  // eski madad se m har arr ki 0,1,2 index pr aane wali values ko print ya track kr skta hu (ye sab arrays pr jayega or unki 0,1,2 index ki values ko bta dega ki bari bari ki pehle array m es index pr ye value thi dusre wale k es index pr ye value thi) 
    // console.log(allBoxes[0],allBoxes[1],allBoxes[2],allBoxes[3]......)  ye line se m button pr ja skta hu 
    // console.log(allBoxes[arr[0]],allBoxes[arr[1]],allBoxes[arr[2]])  ye line se m ye check kr skta hu konsa box konse array k kis index pr indicate ho rha h, Eski madad se array or box k index ko same kra gya h
   // en allBoxes[arr[0]] ko ab ham ek ek variable m store kr lege  
    
   let pos1value = allBoxes[arr[0]].innerHTML;
   let pos2Value = allBoxes[arr[1]].innerHTML;
   let pos3Value = allBoxes[arr[2]].innerHTML;   //.innerHTML k use se ham console m inspect krke dekh skte h konsi postion pr konsi value h,

  //  console.log(arr[0],arr[1],arr[2])  //ye wali line or 
  //  console.log(allBoxes[arr[0]].innerHTML,allBoxes[arr[1]].innerHTML,allBoxes[arr[2]].innerHTML) //ye wali line dono se pta chal jaega ki konse button pr click kra to konse pattern k index pr X hai or konse pr O hai,
   //yaani ki pattern jo bnaye the unki value sahi jagah pahuch rhi h ki nhi trace ho rha h ab

   //ab hame do baat ka dhayan rakhna h pehli ye ki winning pattern m empty value ko check na kre if loop lagaake or usi k andar ek or if(){ if(){}}
   if(pos1value != "" && pos2Value != "" && pos3Value != ""){
    if(pos1value === pos2Value && pos2Value === pos3Value){
          console.log("winner", pos1value) //yaani jo winner bnega uska vo pehli postion wala hi to hoga maan le 0 h lgatar 3 bar yaani 0 wla jita na to jiski position pehli hogi or pattern match kr rha hoga vhi winner h
          

          offAllBtn(); //niche wala fun yha call kr diya winner aate hi disable ho jaaye btn


          popDiv.innerText = `The winner is player: ${pos1value}`;
          popMain.classList.remove("popHide")  //ye hide ko remove kr dega jab ye winner decide ho jaega or front end pr show hone lgega
    }

   }
  }
}


//ye fun h winner aane k baad dubara se button click na ho esliye 
let offAllBtn = ()=>{
  for(let nineBtn of allBoxes){
    nineBtn.disabled = true;
    
    resetBtn.disabled = true; //esse restart btn bhi disable ho jaega
  }
}

newgameBTN.addEventListener("click",()=>{
  window.location.reload();
})






//mujhe match draw ki condition build krni h jab 9 ki 9 Button click ho jaaye or winner na aaye tab ek different message aaye
//X ka color alag ho O ka color alag ho