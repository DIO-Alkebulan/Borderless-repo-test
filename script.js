const links = document.querySelectorAll('.hover-links');
  const infoBoxes = document.querySelectorAll('.item-dropdown');

  links.forEach(link => {
    const targetId = link.getAttribute('data-target');
    const targetBox = document.getElementById(targetId);

    link.addEventListener('mouseenter', () => {
      infoBoxes.forEach(box => box.classList.remove('visible'));
      targetBox.classList.add('visible');
    });

    link.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!targetBox.matches(':hover')) {
          targetBox.classList.remove('visible');
        }
      }, 150);
    });

    targetBox.addEventListener('mouseleave', () => {
      targetBox.classList.remove('visible');
    });
  });
