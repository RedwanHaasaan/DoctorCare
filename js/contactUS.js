emailjs.init('AAQ7G9CW22imthcNU'); 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear previous status
    formStatus.textContent = "";
    formStatus.classList.remove("text-primary-green", "text-red-500");

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      // Send email to admin
      await emailjs.sendForm('service_doctorCare', 'template_adminTemplate', form);

      // Success message
      formStatus.textContent = "Message sent successfully! A copy has been sent to your email.";
      formStatus.classList.add("text-primary-green");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      formStatus.textContent = "Failed to send message. Please try again later."; // Error message
      formStatus.classList.add("text-red-500");
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
