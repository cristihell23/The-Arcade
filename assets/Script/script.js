//Global Variables //
let totalScoreSaver = parseInt(localStorage.getItem('totalScoreSaver'));
console.log(totalScoreSaver);
let totalScore = document.getElementById('score');
let mistake = 0;
let random = Math.floor(Math.random() * 10);
console.log(random);

// Guess Correct Number Game //
const submit = () => {
    if (parseInt(document.getElementById ('answer').value) === random) {
        alert('This is correct');
        document.getElementById('num').textContent = `${random}`;
        totalScoreSaver+=1;
        console.log(totalScoreSaver);
        localStorage.setItem("totalScoreSaver", (totalScoreSaver));
        window.history.back();
    }
    else {
        let x = document.createElement("i");
        x.className = 'fa-solid fa-heart-crack';
        document.body.appendChild(x);
        document.getElementById('heart-wrapper').appendChild(x);
        alert('This is not the correct Number');
        mistake+=1;
        if (mistake === 3){
            window.history.back();
        }
    };
};