export function getOwnerWindow(node?: HTMLElement | null) {
  return node instanceof Element
    ? (getOwnerDocument(node).defaultView ?? window)
    : window;
}

export function getOwnerDocument(node?: HTMLElement | null) {
  return node instanceof Element ? (node.ownerDocument ?? document) : document;
}

export function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export const isBrowser = canUseDOM();

export function contains(parent: HTMLElement, child: HTMLElement) {
  return parent === child || parent.contains(child);
}
