onload = () => {
  const c = setTimeout(() => {
    document.getElementById("body").classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
