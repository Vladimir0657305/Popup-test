let modal = document.getElementById('mymodal');
let btn = document.getElementById('mybtn');
let sp = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

sp.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}