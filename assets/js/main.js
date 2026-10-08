/**
 * Lumina Café de Especialidad - Main Client Logic
 * Syntropy Digital Web Standards
 */

document.addEventListener('DOMContentLoaded', () => {
  // Accordion exclusive disclosure behavior for FAQ items
  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        detailsElements.forEach((other) => {
          if (other !== detail && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
});
