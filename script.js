document.querySelector('a[href^="mailto:"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = this.href;
  });