const number = document.querySelectorAll('.number');
const defaultRatingIndex = 0;
const button = document.querySelector('#okbutton')
let currentRatingIndex = 0;


button.disabled = true;

const setRating = (index) => {
    number.forEach(number => number.classList.remove('selected'));
    if (index > 0 && index <= number.length) {
        document.querySelector(`[data-rate="${index}"]`).classList.add('selected');
    }
    function stateHandle() {
        if (index == "0") {
            button.disabled = true;
        } else{
            button.disabled = false;
        }
    }
stateHandle();
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
        
        const avaliation = document.querySelector('.avaliation-rating');
    const texto = `You selected ${currentRatingIndex} out of 5`;

    avaliation.insertAdjacentHTML("afterbegin", texto);
    });
})



