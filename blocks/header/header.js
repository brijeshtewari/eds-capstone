// media query match that indicates desktop width
const isDesktop = window.matchMedia('(min-width: 900px)');

/**
 * Fetch the nav fragment. Metadata-independent dual-fetch:
 * /content first (localhost / aem up), then root (DA/EDS production).
 */
async function fetchNavFragment() {
  let resp = await fetch('/content/nav.plain.html');
  if (!resp.ok) resp = await fetch('/nav.plain.html');
  if (!resp.ok) return null;
  const html = await resp.text();
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp;
}

/** Rewrite relative image sources so they resolve from the site root. */
function fixImagePaths(scope) {
  scope.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src');
    if (src && !src.startsWith('http') && !src.startsWith('/')) {
      img.src = `/${src}`;
    }
  });
}

/** Build the locale dropdown from the utility section's country list. */
function decorateLocale(utilitySection) {
  const list = utilitySection.querySelector('ul');
  if (!list) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'nav-locale';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-locale-toggle';
  toggle.setAttribute('aria-expanded', 'false');

  // Use the first country's flag + its first locale label as the current locale.
  const firstItem = list.querySelector(':scope > li');
  const firstFlag = firstItem?.querySelector('img');
  const firstLocale = firstItem?.querySelector('ul a');
  if (firstFlag) toggle.append(firstFlag.cloneNode(true));
  const label = document.createElement('span');
  label.textContent = firstLocale ? firstLocale.textContent.trim() : 'en-US';
  toggle.append(label);

  const panel = document.createElement('div');
  panel.className = 'nav-locale-panel';
  panel.append(list.cloneNode(true));

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    wrapper.classList.toggle('is-open', !open);
  });

  wrapper.append(toggle, panel);
  return wrapper;
}

/** Build the search form. Controls are created here, never in the fragment. */
function decorateSearch() {
  const form = document.createElement('form');
  form.className = 'nav-search';
  form.setAttribute('role', 'search');
  form.action = '/us/en/search.html';
  form.method = 'get';

  const icon = document.createElement('span');
  icon.className = 'nav-search-icon';
  icon.setAttribute('aria-hidden', 'true');

  const input = document.createElement('input');
  input.type = 'search';
  input.name = 'q';
  input.placeholder = 'Search';
  input.setAttribute('aria-label', 'Search');

  form.append(icon, input);
  return form;
}

/**
 * loads and decorates the header nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const fragment = await fetchNavFragment();
  block.textContent = '';
  if (!fragment) return;
  fixImagePaths(fragment);

  // The fragment may arrive wrapped (<body><main>…) on localhost or as bare
  // top-level <div>s on DA/EDS. Prefer the wrapped scope, fall back to the
  // parsed container's own direct children.
  const scope = fragment.querySelector('main') || fragment.querySelector('body') || fragment;
  const sections = [...scope.children]
    .filter((el) => el.tagName === 'DIV' && !el.classList.contains('metadata'));

  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.setAttribute('aria-label', 'Main navigation');

  // --- Utility bar (first section): sign-in + locale ---
  const utilitySection = sections[0];
  if (utilitySection) {
    const utility = document.createElement('div');
    utility.className = 'nav-utility';
    const inner = document.createElement('div');
    inner.className = 'nav-utility-inner';

    const signIn = utilitySection.querySelector('p a');
    if (signIn) {
      const link = signIn.cloneNode(true);
      link.classList.add('nav-signin');
      inner.append(link);
    }

    const locale = decorateLocale(utilitySection);
    if (locale) inner.append(locale);

    utility.append(inner);
    nav.append(utility);
  }

  // --- Main header (second section): logo + nav links + search ---
  const mainSection = sections[1];
  if (mainSection) {
    const main = document.createElement('div');
    main.className = 'nav-main';
    const inner = document.createElement('div');
    inner.className = 'nav-main-inner';

    // logo (first <p> link containing an image)
    const logoLink = [...mainSection.querySelectorAll('p a')].find((a) => a.querySelector('img'));
    if (logoLink) {
      const brand = document.createElement('div');
      brand.className = 'nav-brand';
      brand.append(logoLink.cloneNode(true));
      inner.append(brand);
    }

    // hamburger toggle (mobile)
    const hamburger = document.createElement('button');
    hamburger.type = 'button';
    hamburger.className = 'nav-hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<span class="nav-hamburger-icon"></span>';

    // primary nav links + search
    const linkList = mainSection.querySelector('ul');
    const sectionsWrap = document.createElement('div');
    sectionsWrap.className = 'nav-sections';
    if (linkList) sectionsWrap.append(linkList.cloneNode(true));
    sectionsWrap.append(decorateSearch());

    hamburger.addEventListener('click', () => {
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      hamburger.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });

    inner.append(hamburger, sectionsWrap);
    main.append(inner);
    nav.append(main);
  }

  // Reset transient state when crossing the desktop/mobile breakpoint.
  isDesktop.addEventListener('change', () => {
    nav.classList.remove('is-open');
    const hb = nav.querySelector('.nav-hamburger');
    if (hb) {
      hb.setAttribute('aria-expanded', 'false');
      hb.setAttribute('aria-label', 'Open navigation');
    }
    nav.querySelectorAll('.nav-locale').forEach((l) => l.classList.remove('is-open'));
    nav.querySelectorAll('.nav-locale-toggle').forEach((t) => t.setAttribute('aria-expanded', 'false'));
  });

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}
