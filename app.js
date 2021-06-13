const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const select = document.querySelector("select");

let cnt1 = 0, cnt2 = 0;

select.addEventListener('change', rst);

p1.addEventListener('click', player1);
p2.addEventListener('click', player2);

reset.addEventListener('click', rst);
reset.addEventListener('click', function () {
    select.selectedIndex = 0;
})


function player1() {
    if (cnt1 < select.value && cnt2 < select.value) {
        cnt1++;
        p1Score.textContent = cnt1;
    }

    if (cnt1 == select.value) {
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
        p1.classList.add('disabled');
        p2.classList.add('disabled');
    }

}

function player2() {
    if (cnt1 < select.value && cnt2 < select.value) {
        cnt2++;
        p2Score.textContent = cnt2;
    }

    if (cnt2 == select.value) {
        p2Score.style.color = 'green';
        p1Score.style.color = 'red';
        p1.classList.add('disabled');
        p2.classList.add('disabled');
    }
}

function rst() {
    cnt1 = cnt2 = 0;
    p1Score.textContent = cnt1;
    p2Score.textContent = cnt2;
    p1Score.style.color = '#212529';
    p2Score.style.color = '#212529';
    p1.classList.remove('disabled');
    p2.classList.remove('disabled');

}







