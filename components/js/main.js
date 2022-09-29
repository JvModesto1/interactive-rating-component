const number = document.querySelectorAll('.number');
const defaultRatingIndex = 0;
let currentRatingIndex = 0;


const setRating = (index) => {
    number.forEach(number => number.classList.remove('selected'));
    if (index > 0 && index <= number.length) {
        document.querySelector(`[data-rate="${index}"]`).classList.add('selected');
    }
}

const checkSelectedNumber = (number) => {
    if (parseInt(number.getAttribute("data-rate")) === currentRatingIndex) {
        return true;
    }else {
        return false;
    }
}

const resetRating = () => {
    currentRatingIndex = defaultRatingIndex;
    setRating(defaultRatingIndex);
}

number.forEach((number) => {
    number.addEventListener('click', () => {
        if  (checkSelectedNumber(number)) {
            resetRating();
            return;
        }
        const index = parseInt(number.getAttribute("data-rate"));
        currentRatingIndex = index;
        setRating(index);
    });
})

var p = document.getElementById('number');
p.innerHTML = (`[data-rate="${index}"]`);