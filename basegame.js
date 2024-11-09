//numerical variables
let money = 0;
let tokens = 0;
let prestiges = 0;
let ascends = 0;
let tickinterval = 1000;
let manupgrade = 0;

//variables holding elements of page
let notices = document.querySelector('.notices');
let moneycount = document.getElementById('moneycontainer');
let manualbutton = document.getElementById('manbutton');

function prestige() {
    money = 0;
    prestiges += 1;
    tokens += 100;
    notices.innerHTML = `
    <div class="notice-info">
        <p>You have Prestiged ${prestiges} times!<p><br />
        <p>Your formula increases by 1.1 times...<p>
    </div>
    `
}

function manualclick() {
    if(manupgrade == 0) {
        money += 1;
    }
    moneycount.innerHTML = `
    <h2 class="centertext">${money}</h2>
    `
}

function updateMoney() {
    if(prestiges == 0 && ascends == 0) {
        money += 1;
    }else if(prestiges != 0 && ascends == 0) {
        money += 1 * (1.1 * prestiges);
    }else if(prestiges != 0 && ascends != 0) {
        money += 1 ** (1.25 * ascends)
    }else {
        money += (1 * (1.1 * prestiges)) ** (1.25 * ascends)
    }
    moneycount.innerHTML = `
    <h2 class="centertext">${money}</h2>
    `
}

setInterval(updateMoney, tickinterval);

manualbutton.addEventListener('click', manualclick);
