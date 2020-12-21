const dropdownToggle = document.querySelector('.dropdown-toggle');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const nextButton = document.querySelector('.next-button');


dropdownToggle.addEventListener('click', function() {
    ul.classList.add('show');
})

li.forEach(v => {
    v.addEventListener('click', function() {
        dropdownToggle.textContent = v.textContent;
        dropdownToggle.classList.add('selected');
        ul.classList.remove('show');
        nextButton.disabled = false;
    })
})