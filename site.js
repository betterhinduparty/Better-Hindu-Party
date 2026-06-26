(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('header.bar nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var bar = document.querySelector('.scroll-progress');
  var toTop = document.querySelector('.back-to-top');
  if (bar || toTop) {
    var ticking = false;
    function update() {
      var doc = document.documentElement;
      if (bar) {
        var scrollable = doc.scrollHeight - doc.clientHeight;
        var pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
        bar.style.width = pct + '%';
      }
      if (toTop) {
        toTop.classList.toggle('visible', doc.scrollTop > 600);
      }
      ticking = false;
    }
    document.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    });
    update();
  }

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
