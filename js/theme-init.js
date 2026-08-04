(function () {
  function storedTheme() {
    try {
      var v = localStorage.getItem('theme');
      return (v === 'light' || v === 'dark') ? v : null;
    } catch (e) {
      return null;
    }
  }
  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function apply(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  apply(storedTheme() || systemTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!storedTheme()) apply(e.matches ? 'dark' : 'light');
  });
})();
