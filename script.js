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

   makeMoneyForm.addEventListener("click-button", (event) => {
       event.preventDefault();
       debugger;

       let count = countInput.value;
       let coin = coinSelect.value;
       for (let i =0; i < count; i++) {
           const newCoin = document.createElement("div");
           newCoin.classList.add("coin",coin);
            newCoin.addEventListener("click", () => {
                newCoin.remove();
            });
            makeMoneyForm.append(newCoin);
        }
   });