export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  prependItem(card) {
    this._container.prepend(card);
  }

  addItem(card) {
    this._renderer(card);
  }
}
