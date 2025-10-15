let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let newMsg = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;
 const winPatterns =[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [1,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach(function (box) {
     box.addEventListener("click", () => {
         if (trunO) {
            box.innerText = "O";
            trunO = false;
         }else {
                box.innerText = "X";
                trunO = true;
            
            }
         box.disabled = true;
         checkWinner();
     });
 });

 const disableBoxes = () => {
  for(let box of boxes) {
   box.disabled = true;
  }
};
const enabelBoxes = () => {
  for(let box of boxes) {
   box.enabeled  = false;
   box.innerText = "";
  }
};

const showWinner = (winner) => {
   msg.innerText = `Congrats, Winner is ${winner} `;
   newMsg.classList.remove("hide");
   disableBoxes();
};

const ResetGame = () => {
   trunO = true;
   enabelBoxes();
   newMsg.classList.add("hide");
};


 const checkWinner = () => {
    for(let pattern of winPatterns) {
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;

       if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
         
        }
       }
    }
 };
 newBtn.addEventListener("click", ResetGame);
 resetbtn.addEventListener("click", ResetGame);