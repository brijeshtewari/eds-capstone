export default async function decorate(block) {
  if (typeof window.adobe?.concierge?.bootstrap !== 'function') {
    throw new Error('Brand Concierge SDK is unavailable. Check the scripts in head.html.');
  }

  if (document.getElementById('brand-concierge-mount')) {
    throw new Error('Only one Brand Concierge mount is supported per page.');
  }

  const mount = document.createElement('div');
  mount.id = 'brand-concierge-mount';
  block.replaceChildren(mount);

  await window.adobe.concierge.bootstrap({
    instanceName: 'alloy',
    stylingConfigurations: window.styleConfiguration,
    selector: '#brand-concierge-mount',
    stickySession: false,
  });
}
