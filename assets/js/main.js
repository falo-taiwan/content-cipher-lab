/**
 * FALO Content Cipher Lab - Main Interactions Helper
 * Theme: Soft Watercolor Infographic Style
 * Author: Falo x Force Cheng 2026/06/15
 * License: Formosa AI Life Outlook & Taiwan AI Audit Research Project
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('FALO Content Cipher Lab initialized.');

  // Add click-to-copy functionality to all output-area boxes
  const outputs = document.querySelectorAll('.output-area');
  outputs.forEach(el => {
    el.style.cursor = 'pointer';
    el.title = '點擊即可複製內容';
    
    el.addEventListener('click', () => {
      const text = el.innerText || el.textContent;
      if (!text || text === 'OUTPUT' || text === '請輸入內容') return;

      navigator.clipboard.writeText(text).then(() => {
        const origText = el.innerText;
        el.innerText = '✓ 已複製！';
        el.style.backgroundColor = 'var(--primary-accent-light)';
        
        setTimeout(() => {
          el.innerText = text;
        }, 1200);
      }).catch(err => {
        console.error('無法複製文字: ', err);
      });
    });
  });

  // Simple scroll interaction to add dynamic effects to watercolor blobs
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPosition = `0px ${scrollY * 0.1}px`;
  });

  // Lightbox Modal Mechanism for Framework Diagram
  const imgWrapper = document.querySelector('.image-wrapper');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (imgWrapper && lightboxModal) {
    imgWrapper.addEventListener('click', () => {
      lightboxModal.style.display = 'flex';
      setTimeout(() => {
        lightboxModal.style.opacity = '1';
      }, 10);
    });

    const closeModal = () => {
      lightboxModal.style.opacity = '0';
      setTimeout(() => {
        lightboxModal.style.display = 'none';
      }, 300);
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeModal);
    }

    // Close when clicking outside the image
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-close')) {
        closeModal();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
        closeModal();
      }
    });
  }
});
