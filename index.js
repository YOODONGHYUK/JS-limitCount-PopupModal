const number = document.querySelector(".number");
const counter = document.querySelector(".counter-group");
const increase = counter.querySelector(".btn--increase");
const decrease = counter.querySelector(".btn--decrease");
const modal = document.querySelector(".modal-wrapper");
const close = document.getElementById("btn--close");


increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
    limitNumberToFive();
};

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
};

function limitNumberToFive() {
    const current = parseInt(number.innerText, 10);

    if(current === 6) {
        number.innerText = current - 1;
        modal.style.display = "flex";
    }
};

close.onclick = () => {
    modal.style.display = "none";
}
