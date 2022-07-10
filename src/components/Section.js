export default class Section{
   constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }

  renderItems(card) {
     this._renderer(card);
  }

  addItem(newItem) {
     this._container.prepend(newItem);
  }
}