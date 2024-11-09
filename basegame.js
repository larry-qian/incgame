let money = 0;
let tokens = 0;
let prestiges = 0;
let ascends = 0;
let notices = document.querySelector('.notices');

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

function play() {
    
}