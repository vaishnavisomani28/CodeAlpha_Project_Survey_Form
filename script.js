const pages = document.querySelectorAll('.page');
const nextBtns = document.querySelectorAll('.nextBtn');
const prevBtns = document.querySelectorAll('.prevBtn');
const form = document.getElementById('surveyForm');

let currentPage = 0;

// Object to store form data
const formData = {};

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });
});

prevBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    // Populate the formData object with form field values
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.mobile = document.getElementById('mobile').value;
    // Add other form fields as needed

    // Display a pop-up message
    alert('Thank you for submitting the survey form! Data saved successfully.');

    // Clear form fields after submission (optional)
    form.reset();
});
