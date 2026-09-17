import { createOptimizedPicture } from '../../scripts/aem.js';

/*
 * cards-profile — contributor/team profile card grid. Base: cards.
 * Each card is a centered portrait on top, then a name, a role/occupation line,
 * and an optional row of social links.
 *
 * Content model (EDS table): one row per person, cells in order:
 *   [portrait image, name, role, (optional) social links]
 * The image cell is detected by content (contains a picture), so authors can
 * reorder; remaining cells map to name → role → social by position.
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const cells = [...row.children];

    // Image cell = the one containing a picture/img.
    const imageCell = cells.find((c) => c.querySelector('picture, img'));
    const textCells = cells.filter((c) => c !== imageCell);

    if (imageCell) {
      imageCell.className = 'cards-profile-card-image';
      li.append(imageCell);
    }

    const body = document.createElement('div');
    body.className = 'cards-profile-card-body';
    textCells.forEach((c) => {
      // A cell that is only links = the social row.
      const links = [...c.querySelectorAll('a')];
      const onlyLinks = links.length > 0 && !c.textContent.trim();
      if (onlyLinks || (links.length && links.length === c.children.length && !c.textContent.replace(/\s+/g, ''))) {
        c.className = 'cards-profile-card-social';
      }
      while (c.firstChild) body.append(c.firstChild);
    });
    li.append(body);
    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimized = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    img.closest('picture').replaceWith(optimized);
  });

  block.textContent = '';
  block.append(ul);
}
