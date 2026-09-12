/**
 * Fetch the footer fragment. Metadata-independent dual-fetch:
 * /content first (localhost / aem up), then root (DA/EDS production).
 */
async function fetchFooterFragment() {
  let resp = await fetch('/content/footer.plain.html');
  if (!resp.ok) resp = await fetch('/footer.plain.html');
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

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const fragment = await fetchFooterFragment();
  block.textContent = '';
  if (!fragment) return;
  fixImagePaths(fragment);

  const sections = [...fragment.querySelectorAll('body > main > div, main > div, body > div')]
    .filter((d) => !d.classList.contains('metadata'));

  const footer = document.createElement('div');
  footer.className = 'footer-inner';

  // Section 0: brand logo + footer nav
  if (sections[0]) {
    const brand = document.createElement('div');
    brand.className = 'footer-brand';
    const logo = sections[0].querySelector('p a');
    if (logo) brand.append(logo.cloneNode(true));
    const nav = sections[0].querySelector('ul');
    if (nav) {
      const navWrap = document.createElement('nav');
      navWrap.setAttribute('aria-label', 'Footer navigation');
      navWrap.className = 'footer-nav';
      navWrap.append(nav.cloneNode(true));
      brand.append(navWrap);
    }
    footer.append(brand);
  }

  // Section 1: Follow Us + social icons
  if (sections[1]) {
    const social = document.createElement('div');
    social.className = 'footer-social';
    const heading = sections[1].querySelector('h1, h2, h3, h4, h5, h6');
    if (heading) social.append(heading.cloneNode(true));
    const icons = sections[1].querySelector('ul');
    if (icons) {
      const iconList = icons.cloneNode(true);
      iconList.classList.add('footer-social-list');
      social.append(iconList);
    }
    footer.append(social);
  }

  // Section 2: copyright + attribution
  if (sections[2]) {
    const legal = document.createElement('div');
    legal.className = 'footer-legal';
    [...sections[2].children].forEach((child) => legal.append(child.cloneNode(true)));
    footer.append(legal);
  }

  block.append(footer);
}
