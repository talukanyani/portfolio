export function positionOfComponentWithId(id) {
  var element = document.getElementById(id);
  return element.getBoundingClientRect();
}

export function scrollToComponetWithId(id) {
  var offset = positionOfComponentWithId(id).top + window.scrollY;
  window.scrollTo(0, offset);
}
