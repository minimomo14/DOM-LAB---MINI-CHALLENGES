  //Vending machine
    let clickLime = document.getElementById("lime");
    let clickSalt = document.getElementById("salt");
    let clickChocolate = document.getElementById("chocolate");
    let clickFruit = document.getElementById("fruit");
    let theTotal = document.getElementById("total");

    theTotal.innerText = `Total:$0.00`;

    let sum = 0;
   

    const addLime = (event) => {
        event.preventDefault();
        
        sum += 2.00

        theTotal.innerText = `Total:$${sum}`;
    }
    clickLime.addEventListener("click", addLime)


    const addSalt = (event) => {
        event.preventDefault();
        sum += 3.00

        theTotal.innerText = `Total:$${sum}`;
    }
    clickSalt.addEventListener("click", addSalt)


    const addChocolate = (event) => {
        event.preventDefault();
        sum += 4.00

        theTotal.innerText = `Total:$${sum}`;
    }
    clickChocolate.addEventListener("click", addChocolate)

    const addFruit = (event) => {
        event.preventDefault();
        sum += 6.00

        theTotal.innerText = `Total:$${sum}`;
    }
    clickFruit.addEventListener("click", addFruit)

    //MAKE MONEY

   const makeMoneyForm = document.getElementById("makeMoneyForm");
   const countInput = document.getElementById("count");
   const coinSelect = document.getElementById("coin");
   const coinContainer = document.querySelector(".coin-container");

   makeMoneyForm.addEventListener("submit", (event) => {
       event.preventDefault();

       let count = countInput.value;
       let coin = coinSelect.value;
       for (let i =0; i < count; i++) {
           const newCoin = document.createElement("circle");
           newCoin.classList.add("coin",coin);
            newCoin.addEventListener("click", () => {
                newCoin.remove();
            });
            makeMoneyForm.append(newCoin);
        }
   });

//Lightbulb
const lightBulb = document.getElementById("light-bulb");

let lightOn = document.getElementById("on");
lightOn.addEventListener("click", event => {
    lightBulb.style.backgroundColor = ("green");
});

let lightOff = document.getElementById("off");
lightOff.addEventListener("click", event => {
    lightBulb.style.backgroundColor = ("red");
});

let lightToggle = document.getElementById("toggle");
lightToggle.addEventListener("click", event => {
   if (lightBulb.style.backgroundColor === "red") {
       lightBulb.style.backgroundColor = ("green");
   } else if (lightBulb.style.backgroundColor === "green") {
       lightBulb.style.backgroundColor = ("red");
   }
})

let theEnd = document.getElementById("end");
theEnd.addEventListener("click", event => {
    lightBulb.remove();
    lightOn.disable = true;
    lightOff.disable = true;
    lightToggle.disable = true;
    theEnd.disable = true;
})