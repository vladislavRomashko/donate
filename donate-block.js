import { getTodayDateFormat } from './utils/data'

export class DonateBlock {
  #donateItem
  constructor() {
    this.#donateItem = document.createElement('div')
    this.#donateItem.className = 'donate-item'
  }

  render(value) {
    this.#donateItem.innerHTML = `${getTodayDateFormat(
      new Date()
    )} - <b>${value}</b>`

    return this.#donateItem
  }
}
