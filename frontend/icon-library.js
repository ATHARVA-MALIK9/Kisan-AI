const ICON_LIBRARY = {
  'user': { filled: false, svg: `<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />` },
  'map-pin': { filled: false, svg: `<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />` },
  'edit': { filled: false, svg: `<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /> <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" /> <path d="M16 5l3 3" />` },
  'arrow-right': { filled: false, svg: `<path d="M5 12l14 0" /> <path d="M13 18l6 -6" /> <path d="M13 6l6 6" />` },
  'bolt': { filled: false, svg: `<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />` },
  'building-warehouse': { filled: false, svg: `<path d="M3 21v-13l9 -4l9 4v13" /> <path d="M13 13h4v8h-10v-6h6" /> <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />` },
  'camera': { filled: false, svg: `<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /> <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />` },
  'chart-bar': { filled: false, svg: `<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" /> <path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" /> <path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" /> <path d="M4 20h14" />` },
  'check': { filled: false, svg: `<path d="M5 12l5 5l10 -10" />` },
  'chevron-down': { filled: false, svg: `<path d="M6 9l6 6l6 -6" />` },
  'cloud': { filled: false, svg: `<path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />` },
  'download': { filled: false, svg: `<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /> <path d="M7 11l5 5l5 -5" /> <path d="M12 4l0 12" />` },
  'drone': { filled: false, svg: `<path d="M10 10h4v4h-4l0 -4" /> <path d="M10 10l-3.5 -3.5" /> <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" /> <path d="M14 10l3.5 -3.5" /> <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" /> <path d="M14 14l3.5 3.5" /> <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" /> <path d="M10 14l-3.5 3.5" /> <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />` },
  'droplet': { filled: false, svg: `<path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" />` },
  'flask': { filled: false, svg: `<path d="M9 3l6 0" /> <path d="M10 9l4 0" /> <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />` },
  'gift': { filled: false, svg: `<path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" /> <path d="M12 8l0 13" /> <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /> <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />` },
  'heart-handshake': { filled: false, svg: `<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /> <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /> <path d="M12.5 15.5l2 2" /> <path d="M15 13l2 2" />` },
  'help-circle': { filled: false, svg: `<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M12 16v.01" /> <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />` },
  'info-circle': { filled: false, svg: `<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M12 9h.01" /> <path d="M11 12h1v4h1" />` },
  'language': { filled: false, svg: `<path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629" /> <path d="M4 6.371h7" /> <path d="M5 9c0 2.144 2.252 3.908 6 4" /> <path d="M12 20l4 -9l4 9" /> <path d="M19.1 18h-6.2" /> <path d="M6.694 3l.793 .582" />` },
  'lock': { filled: false, svg: `<path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" /> <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /> <path d="M8 11v-4a4 4 0 1 1 8 0v4" />` },
  'menu-2': { filled: false, svg: `<path d="M4 6l16 0" /> <path d="M4 12l16 0" /> <path d="M4 18l16 0" />` },
  'message-circle': { filled: false, svg: `<path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />` },
  'plus': { filled: false, svg: `<path d="M12 5l0 14" /> <path d="M5 12l14 0" />` },
  'recycle': { filled: false, svg: `<path d="M12 17l-2 2l2 2" /> <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" /> <path d="M8.536 11l-.732 -2.732l-2.732 .732" /> <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" /> <path d="M15.464 11l2.732 .732l.732 -2.732" /> <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />` },
  'route-2': { filled: false, svg: `<path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" /> <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />` },
  'seeding': { filled: false, svg: `<path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /> <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /> <path d="M12 20l0 -10" />` },
  'send': { filled: false, svg: `<path d="M10 14l11 -11" /> <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />` },
  'shopping-cart': { filled: false, svg: `<path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l14 1l-1 7h-13" />` },
  'shopping-cart-plus': { filled: false, svg: `<path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M12.5 17h-6.5v-14h-2" /> <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /> <path d="M16 19h6" /> <path d="M19 16v6" />` },
  'star-filled': { filled: true, svg: `<path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />` },
  'target-arrow': { filled: false, svg: `<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M12 7a5 5 0 1 0 5 5" /> <path d="M13 3.055a9 9 0 1 0 7.941 7.945" /> <path d="M15 6v3h3l3 -3h-3v-3l-3 3" /> <path d="M15 9l-3 3" />` },
  'thumb-up': { filled: false, svg: `<path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />` },
  'trash': { filled: false, svg: `<path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />` },
  'users': { filled: false, svg: `<path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /> <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" /> <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />` },
  'world': { filled: false, svg: `<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M3.6 9h16.8" /> <path d="M3.6 15h16.8" /> <path d="M11.5 3a17 17 0 0 0 0 18" /> <path d="M12.5 3a17 17 0 0 1 0 18" />` },
  'x': { filled: false, svg: `<path d="M18 6l-12 12" /> <path d="M6 6l12 12" />` },
};
/* Renders every <i class="ti ti-NAME"> found under root into an inline SVG.
   Safe to call repeatedly — already-rendered icons (real <svg> elements) are skipped. */
function renderIcons(root){
  root = root || document;
  const nodes = root.querySelectorAll('i[class*="ti-"]');
  nodes.forEach(node => {
    const classes = Array.from(node.classList);
    const iconClass = classes.find(c => c.startsWith('ti-') && c !== 'ti-');
    if(!iconClass) return;
    const name = iconClass.replace('ti-', '');
    const icon = ICON_LIBRARY[name];
    if(!icon) return; // unknown icon name — leave as-is rather than break

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '1em');
    svg.setAttribute('height', '1em');
    if(icon.filled){
      svg.setAttribute('fill', 'currentColor');
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
    }
    svg.innerHTML = icon.svg;
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', classes.join(' ') + ' ti-svg');

    node.replaceWith(svg);
  });
}
