
document.getElementById('fishButton').addEventListener('click', () => {
  const finger = document.querySelector('.finger');
  finger.style.opacity = 1;
  finger.style.transform = 'translateX(-50%) translateY(-20px)';
  
  setTimeout(() => {
    finger.style.opacity = 0;
    finger.style.transform = 'translateX(-50%)';
  }, 1000);
});
