const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMsg.textContent = "Invalid email address.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = `Thank you, ${name}. We'll contact you soon.`;
  formMsg.style.color = "green";
  e.target.reset();
});

// Booking Form Handler
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("bname").value.trim();
  const email = document.getElementById("bemail").value.trim();
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;
  const bookingMsg = document.getElementById("bookingMessage");

  if (!name || !email || !date || !service) {
    bookingMsg.textContent = "Please complete all fields.";
    bookingMsg.style.color = "red";
    return;
  }

  bookingMsg.textContent = `Thanks ${name}, your ${service} appointment is booked on ${date}.`;
  bookingMsg.style.color = "green";
  e.target.reset();
});
