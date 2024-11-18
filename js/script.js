const end = 20;
let score = 0; 

const makeGrid = () => {
    // rows and columns 4 x 5
    const grid = document.getElementById("grid");
    for (i = 1; i <= end; i++) {
        const button = document.createElement("button"); 
        button.innerText = i;
        button.addEventListener("click", (e) => {
            console.log("CLICKED");
            if (fizzBuzz(i) == "fizzbuzz") { 
                button.innerText = "fizzbuzz"; 
                button.className = "fizzbuzz";
                score++;
            }
            if (fizzBuzz(i) == "fizz") { 
                button.innerText = "fizz"; 
                button.className = "fizz";
                score++;
            }
            if (fizzBuzz(i) == "buzz") { 
                button.innerText = "buzz"; 
                button.className = "buzz";
                score++;
            }
            
            button.disabled = true; 
            if (score = 9) {
                alert ('You Win!');
            }
        });
        grid.appendChild(button);
    }
}

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) { return "fizzbuzz"; }
    if (num % 5 === 0) { return "buzz"; }
    if (num % 3 === 0) { return "fizz"; }
}

makeGrid();
