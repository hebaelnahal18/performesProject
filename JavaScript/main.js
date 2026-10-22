const mobileMenu=document.querySelector('.mobile-menu')
const navbar=document.querySelector('nav')
mobileMenu.addEventListener('click',(e)=>{
      e.stopPropagation();
    navbar.classList.toggle('active')
})

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

