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

    let add_amount = document.getElementById("how-many");
    let coin_type = document.getElementById("coinType");
    let click_submit = document.getElementById("click-button");
    let remove_coin = document.getElementById("click-remove");
    let theList = document.getElementById("the-list");

    function myFunction() {
        document.getElementById("circle").style.animation = "circle"
    }

    form.addEventListener("click-button", (event) => {
        event.preventDefault();
        let enter_amount = add_amount.value;

        const coinItem = document.createElement("li");
        coinItem.innerText = enter_amount;
        coinItem.style.color = color;
        
        if (enter_amount === true) {
            coinItem.classList.add("circle");
        }
    
    theList.append(coinItem);

    });

   /* all_init.addEventListener("click-button", (event) => {
        event.preventDefault();
        let amount = amountInput.value;
        let coinType = coinTypeInput.value;
        //console.log(amount, coinType);

    for (i = 0 ; i < amount; i++) {
    const eachCoin = document.createElement("the-list");
    all_init.addEventListener("click-button");
    }

    eachCoin.addEventListener("click-remove", () => {
        eachCoin.remove();
    
    });


    all_init.append("coinType");
    }

/* document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    //console.log("button was clicked");
    let clickLime = document.getElementById("lime").value;
    let clickSalt = document.getElementById("salt").value;
    let clickChocolate = document.getElementById("chocolate").value;
    let clickFruit = document.getElementById("fruit").value;
    let theTotal = clickLime + clickSalt + clickChocolate + clickFruit;
    //document.getElementById("total").innerHTML = "Total:"+ theTotal;
})
*/
/*
let enterCoin = document.getElementById("how-many");
let eachCoin = document.getElementById("coins");
let submit = document.getElementById("click-button");

//form.addEventListener("click-button")
form.addEventListener("click-button", event => {
    event.preventDefault();
    const addCoin = numberInput.value;
    const coinValue = coinInput.value;
    const submit_button = submit.click;

    let add_newCoin = document.createElement("shape")
    add_newCoin.classList.add("#circle");
    if (submit_button === true) {
        add_newCoin.classList.add("circle")

    }
    shape.appendChild(add_newCoin);
}); */
