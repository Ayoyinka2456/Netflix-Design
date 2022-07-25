const faqdropdown = document.getElementById('FAQ-dropdown');
const faqelement = document.getElementById('FAQ-element');
const arrowdown = document.getElementById('arrow-down');


faqdropdown.addEventListener('click', ()=>{
    // faq_dropdown.classList.toggle('open');
    faqelement.classList.toggle('hidden');
    arrowdown.classList.toggle('rotate-180')

});