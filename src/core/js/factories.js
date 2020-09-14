export function labelComponentFactory(text) {
    const label = document.createElement('label');
    label.innerHTML = text;
    return label;
}
