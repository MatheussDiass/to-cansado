const navLinks = document.querySelectorAll('nav ul li a');
const navSubmenus = document.querySelectorAll('nav ul li ul');

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    const submenu = link.nextElementSibling;
    if (submenu) {
      submenu.style.opacity = '1';
      submenu.style.pointerEvents = 'auto';
    }
  });

  link.addEventListener('mouseout', () => {
    const submenu = link.nextElementSibling;
    if (submenu) {
      submenu.style.opacity = '0';
      submenu.style.PointerEvents = 'none';
    }
  });
});