const themeScript = `(function initTheme() {
  const theme = localStorage.getItem('theme');
  
  if (
    localStorage.theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
})();
`;

export default themeScript;
