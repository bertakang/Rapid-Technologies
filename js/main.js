

document.addEventListener('DOMContentLoaded', () => {

  const navLinks = document.querySelectorAll('.offcanvas .nav-link');

  navLinks.forEach(link => {
      link.addEventListener('click',event => {
        event.preventDefault(); // Prevent the default link behavior
            
        const targetSectionId = link.getAttribute('href'); // Get the target section's ID
        const targetSection = document.querySelector(targetSectionId);
        const offcanvas = document.querySelector('.offcanvas');
        
        // Scroll to the target section
        if (targetSection) {
          const targetSectionTop = targetSection.offsetTop;
          window.scrollTo({ top: targetSectionTop, behavior: 'smooth' });
        }
        
        // Close the offcanvas menu if it's open
        if (offcanvas.classList.contains('show')) {
            const button = document.querySelector('button.navbar-toggler');
            button.click();
        }
      });
  });
});