const animation = ScrollReveal({
  distance: '30px',
  duration: 1500,  
  delay: 400,
  reset: true
});

animation.reveal('.hero-image, .hero-content, .service-content, .about-section, .service-cards', {
  delay: 200,
  origin: 'bottom'
});
animation.reveal('.stats-section, .contact-image', {
  delay: 200,
  origin: 'right'
});
animation.reveal('.stats-section, .contact-form', {
  delay: 200,
  origin: 'left'
});
