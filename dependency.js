 /*(function() {
  if (document.getElementById('full-white-overlay')) return;

  // ticimax
  const overlay = document.createElement('div');
  overlay.id = 'full-white-overlay';
  
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    zIndex: '9999999',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  });

  const contentContainer = document.createElement('div');
  contentContainer.id = 'overlay-content';
  contentContainer.innerHTML = ``;

  overlay.appendChild(contentContainer);
  document.body.appendChild(overlay);
})();*/
