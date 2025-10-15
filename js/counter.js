const counters = document.querySelectorAll('.stats-section h1');

counters.forEach(counter => {
  const target = +counter.innerText.replace(/\D/g, '');
  counter.innerText = '+0';

  let count = 0;
  const duration = 2000; 
  const stepTime = Math.abs(Math.floor(duration / target));

  const updateCounter = () => {
    count++;
    if (count <= target) {
      counter.innerText = `+${count.toLocaleString()}`;
      setTimeout(updateCounter, stepTime);
    } else {
      counter.innerText = `+${target.toLocaleString()}`;
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
});
