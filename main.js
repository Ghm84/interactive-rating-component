if (document.querySelector('.card-one')) {

    const ratingElements = document.querySelectorAll('.rating h2');
    const submitButton = document.querySelector('button');

    let selectedRating = null;

    ratingElements.forEach(rating => {
        
        rating.addEventListener('click', () => {

            ratingElements.forEach(r => r.classList.remove('active'));

            rating.classList.add('active');

            selectedRating = rating.innerText;

        });
    });

    submitButton.addEventListener('click', () => {

        if (selectedRating) {

            window.location.href = `thanks.html?rating=${selectedRating}`;

        } else {

            alert('Please selecte a rating before submitting');

        }
    });
}

    if (document.querySelector('.card-two')) {

        const urlParams = new URLSearchParams(window.location.search);

        const rating = urlParams.get('rating');

        if (rating) {

            const selectedRatingText = document.querySelector('.selected');

            selectedRatingText.innerText = `You selected ${rating} out of 5`;
        }
    }


const ratingNumbers = document.querySelectorAll('.rating h2');


ratingNumbers.forEach((number) => {

    number.addEventListener('click', () => {
       
        ratingNumbers.forEach((el) => {
            
            el.classList.remove('selected');
       
        });

        number.classList.add('selected');

        selectedRating = number.textContent;
    
    });
});
