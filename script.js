let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winner");

let turnO = true; //Player X or Player O

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  boxenable();
  msgcontainer.classList.add("hide");

  
};
const newg = () => {
  turnO = true;
  boxenable();
  msgcontainer.classList.add("hide");

  
};

// console.log(winpattern);

boxdisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

boxenable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
    // msgcontainer.classList.add("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Box was Clicked");
    if (turnO) {
    
        box.style.color="#626868";
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color="#b0413e";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
    showwinner = (winner) => {
      msg.innerHTML = `Congratulations!Winner is ${winner}`;
      msgcontainer.classList.remove("hide");
    };
  });
});
let checkwinner = () => {
  for (let pattern of winpattern) {
    // //boxes vale array ke andr is index pr jao
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("Winner " + pos1val);
        boxdisable();
        showwinner(pos1val);

        // box.disabled=true;
      }
    }
  }
};

reset.addEventListener("click", resetgame);
newgame.addEventListener("click", newg);

