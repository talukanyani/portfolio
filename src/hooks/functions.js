export function positionOF(id) {
    var element = document.getElementById(id);
    return element.getBoundingClientRect();
}

export function scrollTO(id) {
    var offset = positionOF(id).top + window.scrollY;
    window.scrollTo(0, offset);
}
