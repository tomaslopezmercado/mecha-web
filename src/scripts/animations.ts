const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ——— INTRO ———
function runIntro() {
  const overlay = document.getElementById('intro-overlay');

  if (reduceMotion) {
    if (overlay) overlay.style.display = 'none';
    return;
  }

  setTimeout(() => {
    const mark = document.getElementById('intro-mark');
    if (mark) {
      mark.style.transform = 'scale(0.21) translate(-440px, -380px)';
    }
    if (overlay) {
      setTimeout(() => { overlay.style.opacity = '0'; }, 700);
      setTimeout(() => { overlay.style.display = 'none'; }, 1400);
    }
  }, 1400);
}

// ——— PARALLAX + FADE (sparks de sección) ———
const sparks = document.querySelectorAll<HTMLElement>('.spark');

function updateSparks() {
  if (reduceMotion) return;

  const vh = window.innerHeight;
  sparks.forEach(s => {
    const speed = parseFloat(s.dataset.speed ?? '0');
    const rect = s.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const offset = (center - vh / 2) * speed;

    s.style.transform = `translateY(${offset}px)`;
    s.style.setProperty('--base-transform', `translateY(${offset}px)`);

    const dist = Math.abs(center - vh / 2);
    const fadeOp = Math.max(0, Math.min(1, 1 - dist / (vh * 1.2)));
    const baseOp = parseFloat(s.dataset.baseop ?? '0.9');
    s.style.setProperty('--max-op', (baseOp * fadeOp).toFixed(2));
  });
}

// ——— BACKGROUND SPARKS (aparecen y desaparecen con el scroll) ———
const bgSparks = document.querySelectorAll<HTMLElement>('.bg-spark');

function updateBgSparks() {
  if (reduceMotion) return;

  const scrollCenter = window.scrollY + window.innerHeight / 2;
  const fadeRange = window.innerHeight * 0.38;

  bgSparks.forEach(s => {
    const virtualY = parseFloat(s.dataset.virtualY ?? '0');
    const dist = Math.abs(virtualY - scrollCenter);
    const fadeOp = Math.max(0, 1 - dist / fadeRange);
    const baseOp = parseFloat(s.dataset.baseop ?? '0.5');
    s.style.setProperty('--max-op', (baseOp * fadeOp).toFixed(2));
  });
}

function onScroll() {
  updateSparks();
  updateBgSparks();
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);

runIntro();
updateSparks();
updateBgSparks();
