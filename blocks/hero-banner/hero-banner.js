export default function decorate(block) {
  if (!block.querySelector(':scope > div:first-child picture')) {
    block.classList.add('no-image');
  }

  // group the text (heading, paragraph, CTA) into a content box for overlay positioning
  const contentCell = [...block.querySelectorAll(':scope > div > div')]
    .find((cell) => !cell.querySelector('picture'));
  if (contentCell) {
    contentCell.classList.add('hero-banner-content');
  }
}
