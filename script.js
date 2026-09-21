// Accessible navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  // Navigation toggle (mobile)
  (function setupNav() {
    var navToggle = document.getElementById('navToggle');
    var menu = document.getElementById('primaryMenu');
    if (!navToggle || !menu) return;
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
      if (!expanded) menu.querySelector('a')?.focus();
    });
  })();

  // Footer year
  (function setYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  })();

  // Accessible form handling
  (function setupForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var errors = document.getElementById('formErrors');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = ['name', 'email', 'message'];
      var firstInvalid = null;
      var valid = true;
      fields.forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        var value = (el.value || '').trim();
        if (!value) {
          valid = false;
          el.setAttribute('aria-invalid', 'true');
          if (!firstInvalid) firstInvalid = el;
        } else {
          el.removeAttribute('aria-invalid');
        }
      });
      if (!valid) {
        errors.classList.remove('visually-hidden');
        errors.textContent = 'Please fill in the required fields.';
        firstInvalid.focus();
        return;
      }
      // Mock success (replace with real submit)
      errors.classList.remove('visually-hidden');
      errors.textContent = 'Message sent. Thank you! (Demo only)';
      form.reset();
    });
  })();
});
