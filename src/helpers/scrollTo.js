export function getElementScrollTop(el, refTarget = document.body) {
  const bodyRect = refTarget.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return parseInt(elRect.top - bodyRect.top);
}

function ScrollTo(target, diff = 0) {
  let scrollTop = null;

  if (typeof target === 'number') {
    scrollTop = target;
  } else {
    scrollTop = getElementScrollTop(target);
  }

  if (typeof window.scrollY === 'undefined') {
    window.scrollTo(0, scrollTop - diff);
  } else {
    window.scrollTo({
      top: scrollTop - diff,
      left: 0,
      behavior: 'smooth'
    });
  }
}

export default ScrollTo;