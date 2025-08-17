// Smooth scroll for on-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Intersection Observer for fade-in reveals
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.2});

document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
