// Guess Correct Number Game //
let random = Math.floor(Math.random() * 10);

const submit = () => {
    if (parseInt(document.getElementById ('answer').value) === random) {
        alert('This is correct');
        document.getElementById('num').textContent = `${random}`;
    }
    else {
        let x = document.createElement("i");
        x.className = 'fa-solid fa-heart-crack';
        document.body.appendChild(x);
        document.getElementById('heart-wrapper').appendChild(x);
        alert('This is not the correct Number');
    };
};
// Guess Correct Number Game //