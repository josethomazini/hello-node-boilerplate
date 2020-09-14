export function imageComponentFactory(src) {
    const image = new Image();
    image.src = src;

    const div = document.createElement('div');
    div.appendChild(image);
    return div;
}
