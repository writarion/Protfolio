// ==== Scroll Indicator ==== window.onscroll = function () { let winScroll = document.body.scrollTop || document.documentElement.scrollTop; let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; let scrolled = (winScroll / height) * 100; document.querySelector(".scroll-indicator").style.width = scrolled + "%"; };

// ==== Theme Toggle ==== const themeBtn = document.getElementById('theme-btn'); themeBtn.addEventListener('click', () => { document.body.classList.toggle('light-mode'); if (document.body.classList.contains('light-mode')) { document.body.style.background = '#f0f0f0'; document.body.style.color = '#111'; themeBtn.innerText = 'Dark Mode'; } else { document.body.style.background = 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'; document.body.style.color = '#fff'; themeBtn.innerText = 'Light Mode'; } });

// ==== Smooth Fade on Scroll ==== const sections = document.querySelectorAll("section"); const options = { threshold: 0.1 }; const observer = new IntersectionObserver(function (entries) { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = 1; entry.target.style.transform = "translateY(0px)"; } }); }, options);

sections.forEach(section => { section.style.opacity = 0; section.style.transform = "translateY(50px)"; section.style.transition = "all 0.6s ease-out"; observer.observe(section); });

// ==== Simple Contact Form Alert ==== const contactForm = document.querySelector('form'); if (contactForm) { contactForm.addEventListener('submit', function (e) { e.preventDefault(); alert('Thank you for your message! I will get back to you soon.'); contactForm.reset(); }); }
