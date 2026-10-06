export default async function decorate(block) {
  if (typeof window.adobe?.concierge?.bootstrap !== 'function') {
    throw new Error('Brand Concierge SDK is unavailable. Check the scripts in head.html.');
  }

  if (document.getElementById('brand-concierge-mount')) {
    throw new Error('Only one Brand Concierge mount is supported per page.');
  }

  const mount = document.createElement('div');
  mount.id = 'brand-concierge-mount';

  const panel = document.createElement('div');
  panel.className = 'bc-floating-panel';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', 'Brand Concierge chat');

  const controls = document.createElement('div');
  controls.className = 'bc-floating-controls';

  const expand = document.createElement('button');
  expand.type = 'button';
  expand.className = 'bc-floating-expand';
  expand.textContent = 'Open chat';
  expand.setAttribute('aria-controls', mount.id);
  expand.setAttribute('aria-expanded', 'false');

  const title = document.createElement('span');
  title.className = 'bc-floating-title';
  title.textContent = 'Brand Concierge';

  const minimize = document.createElement('button');
  minimize.type = 'button';
  minimize.className = 'bc-floating-minimize';
  minimize.textContent = 'Minimize';
  minimize.setAttribute('aria-label', 'Minimize chat');
  minimize.setAttribute('aria-controls', mount.id);
  minimize.hidden = true;

  function setExpanded(expanded) {
    panel.classList.toggle('is-expanded', expanded);
    expand.setAttribute('aria-expanded', String(expanded));
    expand.hidden = expanded;
    title.hidden = !expanded;
    minimize.hidden = !expanded;
  }

  function minimizeChat() {
    setExpanded(false);
    expand.focus();
  }

  expand.addEventListener('click', () => {
    setExpanded(true);
    const input = mount.querySelector('.chat-input:not(:disabled)');
    if (input) input.focus();
  });
  minimize.addEventListener('click', minimizeChat);

  // Capture typing before the SDK handles it, without replacing its input or session.
  mount.addEventListener('input', (event) => {
    if (event.target.matches('.chat-input') && event.target.value.trim()) {
      setExpanded(true);
    }
  }, true);
  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !event.defaultPrevented
      && panel.classList.contains('is-expanded')) {
      event.preventDefault();
      minimizeChat();
    }
  });

  setExpanded(false);
  controls.append(title, expand, minimize);
  panel.append(controls, mount);
  block.replaceChildren(panel);

  await window.adobe.concierge.bootstrap({
    instanceName: 'alloy',
    stylingConfigurations: window.styleConfiguration,
    selector: '#brand-concierge-mount',
    stickySession: false,
  });
}
