/**
 * Componentes Modulares Compartidos - Agustinos Bolivia
 * Renderiza Topbar, Header Desktop, Cajón de Navegación Móvil (Drawer) y Footer
 */

function renderInstitutionalHeader(activePage = 'inicio', basePath = '') {
  const topbarHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <span class="topbar-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <span class="text-full">Orden de San Agustín • </span>
          </span>
          <a href="tel:+59122311580" class="topbar-info hide-tablet">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +591 (2) 231-1580
          </a>
          <a href="mailto:vicariato@agustinosbolivia.org" class="topbar-info hide-tablet">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            vicariato@agustinosbolivia.org
          </a>
        </div>
        <div class="topbar-right">
          <div class="topbar-links">
            <a href="${basePath}pages/quienes-somos.html#historia">Nuestra Historia</a>
            <a href="${basePath}pages/ser-agustino.html">Vocaciones</a>
            <a href="${basePath}pages/contacto.html#colabora">Colabora</a>
          </div>
          <div class="topbar-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  `;

  const headerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="${basePath}index.html" class="brand-logo" aria-label="Inicio Agustinos Bolivia">
          <div class="brand-crest">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              <path d="M12 7c-2-2.5-4-1-4 1.5 0 2 4 4.5 4 4.5s4-2.5 4-4.5c0-2.5-2-4-4-1.5z" fill="#C59B27" stroke="#C59B27"/>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">AGUSTINOS</span>
            <span class="brand-subtitle">Vicariato de Bolivia • O.S.A.</span>
          </div>
        </a>

        <!-- Menú de Navegación Desktop (> 1080px) -->
        <nav class="main-nav desktop-nav" id="mainNav" aria-label="Navegación principal">
          <div class="nav-item">
            <a href="${basePath}index.html" class="nav-link ${activePage === 'inicio' ? 'active' : ''}">Inicio</a>
          </div>

          <div class="nav-item has-dropdown">
            <a href="${basePath}pages/quienes-somos.html" class="nav-link ${activePage === 'quienes-somos' ? 'active' : ''}">
              <span>Quiénes somos</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="dropdown-menu mega-menu">
              <div>
                <div class="mega-col-title">Identidad & Carisma</div>
                <div class="dropdown-list">
                  <a href="${basePath}pages/quienes-somos.html#historia" class="dropdown-link"><span class="link-dot"></span>Nuestra Historia en Bolivia</a>
                  <a href="${basePath}pages/quienes-somos.html#carisma" class="dropdown-link"><span class="link-dot"></span>Pilares del Carisma Agustiniano</a>
                  <a href="${basePath}pages/quienes-somos.html#san-agustin" class="dropdown-link"><span class="link-dot"></span>San Agustín de Hipona</a>
                </div>
              </div>
              <div>
                <div class="mega-col-title">Santos y Testigos</div>
                <div class="dropdown-list">
                  <a href="${basePath}pages/quienes-somos.html#santos" class="dropdown-link"><span class="link-dot"></span>Santos y Beatos Agustinos</a>
                  <a href="${basePath}pages/quienes-somos.html#fray-calancha" class="dropdown-link"><span class="link-dot"></span>Fray Antonio de la Calancha</a>
                  <a href="${basePath}pages/quienes-somos.html#organizacion" class="dropdown-link"><span class="link-dot"></span>Estructura del Vicariato</a>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item has-dropdown">
            <a href="${basePath}pages/que-hacemos.html" class="nav-link ${activePage === 'que-hacemos' ? 'active' : ''}">
              <span>Qué hacemos</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="dropdown-menu">
              <div class="dropdown-list">
                <a href="${basePath}pages/que-hacemos.html#educacion" class="dropdown-link"><span class="link-dot"></span>Colegios y Educación</a>
                <a href="${basePath}pages/que-hacemos.html#teologado" class="dropdown-link"><span class="link-dot"></span>Teologado Latinoamericano</a>
                <a href="${basePath}pages/que-hacemos.html#pastoral" class="dropdown-link"><span class="link-dot"></span>Parroquias y Pastoral Urbana</a>
                <a href="${basePath}pages/que-hacemos.html#misiones" class="dropdown-link"><span class="link-dot"></span>Misiones y Obras Sociales</a>
              </div>
            </div>
          </div>

          <div class="nav-item has-dropdown">
            <a href="${basePath}pages/ser-agustino.html" class="nav-link ${activePage === 'ser-agustino' ? 'active' : ''}">
              <span>Ser Agustino</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="dropdown-menu">
              <div class="dropdown-list">
                <a href="${basePath}pages/ser-agustino.html#vocaciones" class="dropdown-link"><span class="link-dot"></span>Pastoral Vocacional</a>
                <a href="${basePath}pages/ser-agustino.html#etapas" class="dropdown-link"><span class="link-dot"></span>Itinerario de Formación</a>
                <a href="${basePath}pages/ser-agustino.html#testimonios" class="dropdown-link"><span class="link-dot"></span>Testimonios de Frailes</a>
                <a href="${basePath}pages/ser-agustino.html#discernimiento" class="dropdown-link"><span class="link-dot"></span>Contacto Vocacional</a>
              </div>
            </div>
          </div>

          <div class="nav-item">
            <a href="${basePath}pages/noticias.html" class="nav-link ${activePage === 'noticias' ? 'active' : ''}">Noticias</a>
          </div>

          <div class="nav-item">
            <a href="${basePath}pages/contacto.html" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a>
          </div>
        </nav>

        <!-- Acciones: Buscador, CTA y Botón Menú Móvil con buen margen -->
        <div class="header-actions">
          <button class="search-trigger" id="globalSearchTrigger" aria-label="Abrir buscador global" title="Buscar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
          </button>
          <a href="${basePath}pages/ser-agustino.html#discernimiento" class="btn-header-cta" title="Vocaciones">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>Ser Agustino</span>
          </a>
          <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Abrir menú de opciones" title="Menú">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Backdrop Oscuro para móvil (z-index 2040) -->
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>

    <!-- Cajón de Navegación Móvil (z-index 2050 - Fuera del header para que NUNCA se opaque ni quede atrapado) -->
    <aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-label="Menú de navegación móvil">
      <div class="drawer-header">
        <div class="drawer-brand">
          <div class="brand-crest" style="width: 38px; height: 38px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              <path d="M12 7c-2-2.5-4-1-4 1.5 0 2 4 4.5 4 4.5s4-2.5 4-4.5c0-2.5-2-4-4-1.5z" fill="#C59B27"/>
            </svg>
          </div>
          <div>
            <div style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 700; color: var(--clr-navy); line-height: 1;">AGUSTINOS</div>
            <div style="font-size: 0.65rem; font-weight: 700; color: var(--clr-primary); letter-spacing: 0.1em; text-transform: uppercase;">Vicariato de Bolivia</div>
          </div>
        </div>
        <button class="drawer-close-btn" id="mobileDrawerClose" aria-label="Cerrar menú">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="drawer-body">
        <div class="drawer-links">
          <div class="drawer-item">
            <a href="${basePath}index.html" class="drawer-link ${activePage === 'inicio' ? 'active' : ''}">
              <span>Inicio</span>
            </a>
          </div>

          <div class="drawer-item has-sub">
            <button class="drawer-link drawer-toggle-btn ${activePage === 'quienes-somos' ? 'active' : ''}">
              <span>Quiénes somos</span>
              <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="drawer-sub">
              <a href="${basePath}pages/quienes-somos.html#historia" class="drawer-sub-link">Nuestra Historia en Bolivia</a>
              <a href="${basePath}pages/quienes-somos.html#carisma" class="drawer-sub-link">Pilares del Carisma</a>
              <a href="${basePath}pages/quienes-somos.html#san-agustin" class="drawer-sub-link">San Agustín de Hipona</a>
              <a href="${basePath}pages/quienes-somos.html#santos" class="drawer-sub-link">Santos y Beatos Agustinos</a>
              <a href="${basePath}pages/quienes-somos.html#fray-calancha" class="drawer-sub-link">Fray Antonio de la Calancha</a>
            </div>
          </div>

          <div class="drawer-item has-sub">
            <button class="drawer-link drawer-toggle-btn ${activePage === 'que-hacemos' ? 'active' : ''}">
              <span>Qué hacemos</span>
              <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="drawer-sub">
              <a href="${basePath}pages/que-hacemos.html#educacion" class="drawer-sub-link">Colegio San Agustín (Cochabamba)</a>
              <a href="${basePath}pages/que-hacemos.html#teologado" class="drawer-sub-link">Teologado Latinoamericano</a>
              <a href="${basePath}pages/que-hacemos.html#pastoral" class="drawer-sub-link">Parroquias y Templos</a>
              <a href="${basePath}pages/que-hacemos.html#misiones" class="drawer-sub-link">Misiones en Sud Yungas</a>
            </div>
          </div>

          <div class="drawer-item has-sub">
            <button class="drawer-link drawer-toggle-btn ${activePage === 'ser-agustino' ? 'active' : ''}">
              <span>Ser Agustino</span>
              <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="drawer-sub">
              <a href="${basePath}pages/ser-agustino.html#vocaciones" class="drawer-sub-link">Pastoral Vocacional</a>
              <a href="${basePath}pages/ser-agustino.html#etapas" class="drawer-sub-link">Itinerario de Formación</a>
              <a href="${basePath}pages/ser-agustino.html#discernimiento" class="drawer-sub-link">Contacto de Discernimiento</a>
            </div>
          </div>

          <div class="drawer-item">
            <a href="${basePath}pages/noticias.html" class="drawer-link ${activePage === 'noticias' ? 'active' : ''}">
              <span>Noticias y Actualidad</span>
            </a>
          </div>

          <div class="drawer-item">
            <a href="${basePath}pages/contacto.html" class="drawer-link ${activePage === 'contacto' ? 'active' : ''}">
              <span>Comunidades y Contacto</span>
            </a>
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--clr-border);">
          <a href="${basePath}pages/ser-agustino.html#discernimiento" class="btn btn-primary" style="width: 100%; font-size: 0.92rem; padding: 0.85rem 1.2rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            ¿Sientes la vocación? Escríbenos
          </a>
          <div style="margin-top: 1.25rem; font-size: 0.84rem; color: var(--clr-text-muted); display: flex; flex-direction: column; gap: 0.45rem;">
            <div><strong>Teléfono:</strong> <a href="tel:+59122311580" style="color: var(--clr-primary); font-weight: 600;">+591 (2) 231-1580</a></div>
            <div><strong>Email:</strong> <a href="mailto:vicariato@agustinosbolivia.org" style="color: var(--clr-primary); font-weight: 600;">vicariato@agustinosbolivia.org</a></div>
          </div>
        </div>
      </div>
    </aside>
  `;

  return topbarHTML + headerHTML;
}

function renderInstitutionalFooter(basePath = '') {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="brand-logo" style="margin-bottom: 0.5rem;">
            <div class="brand-crest" style="width: 42px; height: 42px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                <path d="M12 7c-2-2.5-4-1-4 1.5 0 2 4 4.5 4 4.5s4-2.5 4-4.5c0-2.5-2-4-4-1.5z" fill="#C59B27"/>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-title" style="color: #FFFFFF; font-size: 1.3rem;">AGUSTINOS</span>
              <span class="brand-subtitle" style="color: var(--clr-gold-light);">Vicariato de Bolivia • O.S.A.</span>
            </div>
          </div>
          <p class="footer-brand-desc">
            Frailes de la Orden de San Agustín en Bolivia consagrados a la búsqueda sincera de Dios en comunidad, al servicio fraterno de la educación de excelencia, la pastoral y la promoción solidaria de la dignidad humana.
          </p>
          <div class="footer-motto">
            "Una sola alma y un solo corazón orientados hacia Dios"
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Secciones</h4>
          <div class="footer-links">
            <a href="${basePath}index.html">Inicio</a>
            <a href="${basePath}pages/quienes-somos.html">Quiénes somos</a>
            <a href="${basePath}pages/que-hacemos.html">Qué hacemos</a>
            <a href="${basePath}pages/ser-agustino.html">Ser Agustino (Vocaciones)</a>
            <a href="${basePath}pages/noticias.html">Noticias y Actualidad</a>
            <a href="${basePath}pages/contacto.html">Comunidades y Contacto</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Presencia en Bolivia</h4>
          <div class="footer-links">
            <a href="${basePath}pages/que-hacemos.html#colegio-cbba">Colegio San Agustín (Cbba)</a>
            <a href="${basePath}pages/que-hacemos.html#teologado">Teologado Fray Antonio (Cbba)</a>
            <a href="${basePath}pages/contacto.html#comunidades">Convento San Nicolás (La Paz)</a>
            <a href="${basePath}pages/ser-agustino.html#formacion">Casa Tomás Van der Vloodt</a>
            <a href="${basePath}pages/que-hacemos.html#misiones">Misión de Yungas (Chirca)</a>
            <a href="${basePath}pages/contacto.html#comunidades">Pastoral Santa Cruz</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Sede Central y Contacto</h4>
          <div class="footer-contact-list">
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Convento San Nicolás de Tolentino, Calle Mercado y Ayacucho, La Paz, Bolivia</span>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+591 (2) 231-1580 / +591 (4) 425-4550</span>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>vicariato@agustinosbolivia.org</span>
            </div>
          </div>
          <div style="margin-top: 1.15rem;">
            <a href="${basePath}pages/contacto.html#colabora" class="btn btn-gold" style="padding: 0.65rem 1.25rem; font-size: 0.84rem; width: 100%;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Colabora con nuestras Obras
            </a>
          </div>
        </div>
      </div>

      <div class="container footer-bottom">
        <div>
          © ${new Date().getFullYear()} Orden de San Agustín — Vicariato de Bolivia. Inspirado en la red agustiniana internacional.
        </div>
        <div class="footer-bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos Institucionales</a>
          <a href="#">Brand Portal</a>
          <a href="${basePath}pages/contacto.html">Mapa de Presencia</a>
        </div>
      </div>
    </footer>
  `;
}

function renderModalsAndOverlays() {
  return `
    <!-- Buscador Global Overlay -->
    <div class="search-overlay" id="searchOverlay" aria-modal="true" role="dialog">
      <div class="search-modal">
        <div class="search-modal-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
          <input type="text" id="globalSearchInput" placeholder="Buscar colegios, noticias, santos, comunidades..." autocomplete="off" />
          <button class="search-close-btn" id="closeSearchBtn" aria-label="Cerrar buscador">✕</button>
        </div>
        <div class="search-modal-body" id="searchResultsContainer">
          <div style="padding: 1rem; color: var(--clr-text-light); text-align: center; font-size: 0.95rem;">
            Escribe al menos 2 letras para buscar en todo el portal de Agustinos Bolivia.
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Lector de Contenido (Noticias y Santos) -->
    <div class="content-modal-backdrop" id="contentModalBackdrop" aria-modal="true" role="dialog">
      <div class="content-modal-box">
        <button class="content-modal-close" id="closeContentModalBtn" aria-label="Cerrar modal">✕</button>
        <div class="content-modal-inner" id="contentModalBody">
          <!-- Inyectado dinámicamente -->
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast-notification" id="siteToast"></div>
  `;
}
