document.addEventListener('DOMContentLoaded', () => {


    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop default browser refresh

    
        const name = document.getElementById('guestName').value;
        const count = document.getElementById('guestCount').value;
        const date = document.getElementById('bookDate').value;
        const time = document.getElementById('bookTime').value;

    
        alert(`Success! Table reserved for ${name} (${count} guests) on ${date} at ${time}. We look forward to seeing you!`);
        
        
        bookingForm.reset();
    });
    
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit',(e) =>{
        e.preventDefault(); alert('We really appreciate your feedback! hope you enjoyed your time at One8 Cafe!');
        feedbackForm.reset();
    });
    
});
