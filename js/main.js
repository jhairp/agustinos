/**
 * Lógica Principal e Interacciones - Agustinos Bolivia
 * Optimizado para experiencia fluida en móviles, tablets y computadoras
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initGlobalSearch();
  initHeroSlider();
  initContentModals();
  initFAQAccordion();
  initScrollReveal();
  initForms();
});

/* ==========================================================================
   HEADER & NAVEGACIÓN MÓVIL RESPONSIVA (DRAWER CON BACKDROP)
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const drawerClose = document.getElementById('mobileDrawerClose');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const drawer = document.getElementById('mobileNavDrawer');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  function openMobileDrawer() {
    if (drawer) drawer.classList.add('open');
    if (mobileBackdrop) mobileBackdrop.classList.add('show');
    document.body.classList.add('menu-open');
  }

  function closeMobileDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('show');
    document.body.classList.remove('menu-open');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      openMobileDrawer();
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMobileDrawer();
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileDrawer);
  }

  // Cerrar con Escape o al redimensionar a pantalla de escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080 && drawer && drawer.classList.contains('open')) {
      closeMobileDrawer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeMobileDrawer();
    }
  });

  // Manejo de acordeón y submenús dentro del cajón móvil
  if (drawer) {
    const toggleBtns = drawer.querySelectorAll('.drawer-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parentItem = btn.closest('.drawer-item');
        const isOpen = parentItem.classList.contains('open');

        // Cerrar otros para mantener orden
        drawer.querySelectorAll('.drawer-item.has-sub').forEach(item => {
          if (item !== parentItem) item.classList.remove('open');
        });

        parentItem.classList.toggle('open', !isOpen);
      });
    });

    // Cualquier enlace de navegación cierra el menú
    const allLinks = drawer.querySelectorAll('a');
    allLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }
}

/* ==========================================================================
   BUSCADOR GLOBAL INSTANTÁNEO
   ========================================================================== */
function initGlobalSearch() {
  const trigger = document.getElementById('globalSearchTrigger');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('closeSearchBtn');
  const searchInput = document.getElementById('globalSearchInput');
  const resultsContainer = document.getElementById('searchResultsContainer');

  if (!trigger || !overlay || !searchInput) return;

  function openSearch() {
    overlay.classList.add('open');
    document.body.classList.add('menu-open');
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.classList.remove('menu-open');
    searchInput.value = '';
    renderSearchInitial();
  }

  trigger.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeSearch();
    }
  });

  function renderSearchInitial() {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = `
      <div style="padding: 1.5rem; color: var(--clr-text-light); text-align: center; font-size: 0.95rem;">
        Escribe palabras clave como "Cochabamba", "Colegio", "Noviciado", "San Nicolás" o temas de interés.
      </div>
    `;
  }

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      renderSearchInitial();
      return;
    }

    if (typeof AGUSTINOS_DATA === 'undefined') return;

    const matches = [];

    // Buscar en comunidades
    AGUSTINOS_DATA.communities.forEach(c => {
      if (c.name.toLowerCase().includes(query) || c.city.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)) {
        matches.push({
          type: "Comunidad / Obra",
          title: c.name,
          subtitle: `${c.city} — ${c.role}`,
          action: () => openCommunityModal(c)
        });
      }
    });

    // Buscar en noticias
    AGUSTINOS_DATA.news.forEach(n => {
      if (n.title.toLowerCase().includes(query) || n.excerpt.toLowerCase().includes(query) || n.categoryLabel.toLowerCase().includes(query)) {
        matches.push({
          type: "Noticia",
          title: n.title,
          subtitle: `${n.date} • ${n.categoryLabel}`,
          action: () => openNewsModal(n.id)
        });
      }
    });

    // Buscar en santos
    AGUSTINOS_DATA.saints.forEach(s => {
      if (s.name.toLowerCase().includes(query) || s.title.toLowerCase().includes(query) || s.bio.toLowerCase().includes(query)) {
        matches.push({
          type: "Santos y Testigos",
          title: s.name,
          subtitle: `${s.title} (Fiesta: ${s.feast})`,
          action: () => openSaintModal(s.id)
        });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--clr-text-muted);">
          No se encontraron resultados para "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map((m, idx) => `
      <div class="search-result-item" data-index="${idx}" style="cursor: pointer;">
        <div>
          <h4 style="font-size: 1.02rem; margin-bottom: 0.2rem; color: var(--clr-navy);">${escapeHtml(m.title)}</h4>
          <p style="font-size: 0.84rem; color: var(--clr-text-muted);">${escapeHtml(m.subtitle)}</p>
        </div>
        <span class="search-result-tag">${escapeHtml(m.type)}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = el.dataset.index;
        closeSearch();
        matches[idx].action();
      });
    });
  });
}

/* ==========================================================================
   HERO SLIDER TOUCH & AUTO
   ========================================================================== */
function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroDots');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let timer = null;

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `hero-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir a diapositiva ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentSlide);
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.hero-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    }
  }

  function goToSlide(idx) {
    currentSlide = (idx + slides.length) % slides.length;
    updateSlider();
    resetTimer();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, 7000);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Soporte básico para swipe táctil en móvil
  if (slider) {
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        nextSlide();
      } else if (touchEndX - touchStartX > 45) {
        prevSlide();
      }
    }, { passive: true });
  }

  resetTimer();
}

/* ==========================================================================
   MODALES DE CONTENIDO (Noticias y Santos)
   ========================================================================== */
function initContentModals() {
  const backdrop = document.getElementById('contentModalBackdrop');
  const closeBtn = document.getElementById('closeContentModalBtn');

  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function openNewsModal(newsId) {
  if (typeof AGUSTINOS_DATA === 'undefined') return;
  const article = AGUSTINOS_DATA.news.find(n => n.id == newsId);
  if (!article) return;

  const backdrop = document.getElementById('contentModalBackdrop');
  const body = document.getElementById('contentModalBody');
  if (!backdrop || !body) return;

  body.innerHTML = `
    <span class="news-badge" style="position: static; display: inline-block; margin-bottom: 0.8rem;">${escapeHtml(article.categoryLabel)}</span>
    <h2 style="font-size: clamp(1.6rem, 3.5vw, 2.2rem); color: var(--clr-navy); margin-bottom: 0.8rem; line-height: 1.2;">${escapeHtml(article.title)}</h2>
    <div style="font-size: 0.85rem; color: var(--clr-text-light); margin-bottom: 1.3rem;">
      Publicado el ${escapeHtml(article.date)} • ${escapeHtml(article.readTime)} • Vicariato de Bolivia
    </div>
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.4rem; max-height: 360px;">
      <img src="${article.thumb}" alt="${escapeHtml(article.title)}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="font-size: clamp(0.95rem, 1.4vw, 1.05rem); line-height: 1.8; color: var(--clr-text); white-space: pre-line;">
      ${escapeHtml(article.content)}
    </div>
    <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--clr-border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <span style="font-size: 0.85rem; color: var(--clr-text-muted);">¿Quieres más información o colaborar?</span>
      <a href="contacto.html" class="btn btn-primary" style="padding: 0.6rem 1.4rem; font-size: 0.86rem;">Contactar</a>
    </div>
  `;

  document.body.classList.add('menu-open');
  backdrop.classList.add('open');
}

function openSaintModal(saintId) {
  if (typeof AGUSTINOS_DATA === 'undefined') return;
  const saint = AGUSTINOS_DATA.saints.find(s => s.id === saintId);
  if (!saint) return;

  const backdrop = document.getElementById('contentModalBackdrop');
  const body = document.getElementById('contentModalBody');
  if (!backdrop || !body) return;

  body.innerHTML = `
    <div style="display: inline-block; padding: 0.3rem 0.8rem; border-radius: var(--radius-full); background: var(--clr-gold-soft); color: var(--clr-gold); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.8rem;">
      Fiesta: ${escapeHtml(saint.feast)}
    </div>
    <h2 style="font-size: clamp(1.7rem, 3.8vw, 2.3rem); color: var(--clr-navy); margin-bottom: 0.4rem;">${escapeHtml(saint.name)}</h2>
    <p style="font-size: 1rem; color: var(--clr-primary); font-weight: 600; margin-bottom: 1.35rem;">${escapeHtml(saint.title)}</p>
    
    <div style="padding: 1.25rem 1.4rem; border-left: 4px solid var(--clr-primary); background: var(--clr-primary-soft); font-family: var(--font-serif); font-size: clamp(1.1rem, 2vw, 1.25rem); font-style: italic; color: var(--clr-navy); margin-bottom: 1.5rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
      "${escapeHtml(saint.quote)}"
    </div>

    <h4 style="font-size: 1.15rem; color: var(--clr-navy); margin-bottom: 0.65rem;">Semblanza e Inspiración</h4>
    <p style="font-size: clamp(0.95rem, 1.4vw, 1.02rem); line-height: 1.8; color: var(--clr-text-muted); margin-bottom: 2rem;">
      ${escapeHtml(saint.bio)}
    </p>

    <div style="text-align: right;">
      <button class="btn btn-primary" onclick="document.getElementById('contentModalBackdrop').classList.remove('open'); document.body.classList.remove('menu-open');" style="padding: 0.6rem 1.6rem;">Cerrar</button>
    </div>
  `;

  document.body.classList.add('menu-open');
  backdrop.classList.add('open');
}

function openCommunityModal(comm) {
  const backdrop = document.getElementById('contentModalBackdrop');
  const body = document.getElementById('contentModalBody');
  if (!backdrop || !body) return;

  body.innerHTML = `
    <span class="community-city-badge">${escapeHtml(comm.city)}</span>
    <h2 style="font-size: clamp(1.5rem, 3vw, 2rem); color: var(--clr-navy); margin-bottom: 0.5rem;">${escapeHtml(comm.name)}</h2>
    <p style="font-size: 0.96rem; color: var(--clr-primary); font-weight: 600; margin-bottom: 1.35rem;">${escapeHtml(comm.role)}</p>
    
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.35rem; height: clamp(180px, 25vw, 260px);">
      <img src="${comm.image}" alt="${escapeHtml(comm.name)}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <p style="font-size: 0.96rem; line-height: 1.7; color: var(--clr-text-muted); margin-bottom: 1.35rem;">
      ${escapeHtml(comm.description)}
    </p>

    <div style="background: var(--clr-bg-alt); padding: 1.15rem; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.88rem;">
      <div><strong>Dirección:</strong> ${escapeHtml(comm.address)}</div>
      <div><strong>Teléfono:</strong> <a href="tel:${escapeHtml(comm.phone)}" style="color: var(--clr-primary); font-weight: 600;">${escapeHtml(comm.phone)}</a></div>
      <div><strong>Email:</strong> <a href="mailto:${escapeHtml(comm.email)}" style="color: var(--clr-primary); font-weight: 600;">${escapeHtml(comm.email)}</a></div>
      <div><strong>Horarios / Misas:</strong> ${escapeHtml(comm.schedule)}</div>
    </div>
  `;

  document.body.classList.add('menu-open');
  backdrop.classList.add('open');
}

/* ==========================================================================
   ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Cerrar otros
      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherAns = other.querySelector('.faq-answer');
        if (otherAns) otherAns.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   FORMULARIOS Y TOAST
   ========================================================================== */
function showToast(message, duration = 4000) {
  const toast = document.getElementById('siteToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

function initForms() {
  const contactForm = document.getElementById('contactForm');
  const vocacionForm = document.getElementById('vocacionForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = contactForm.querySelector('[name="nombre"]')?.value || 'Hermano/a';
      showToast(`¡Gracias ${nombre}! Tu mensaje ha sido enviado a la secretaría del Vicariato de Bolivia.`);
      contactForm.reset();
    });
  }

  if (vocacionForm) {
    vocacionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = vocacionForm.querySelector('[name="nombre"]')?.value || 'Hermano/a';
      showToast(`Paz y bien, ${nombre}. El equipo de Pastoral Vocacional se contactará contigo para acompañar tu discernimiento.`);
      vocacionForm.reset();
    });
  }
}

/* ==========================================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('visible'));
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
