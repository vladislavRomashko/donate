import './index.css'
import { DonateBlock } from './donate-block'

const donatesContainer = document.querySelector('.donates-container__donates')
const donatesForm = document.querySelector('.donate-form')
const input = donatesForm.querySelector('.donate-form__donate-input')
const totalAmount = donatesForm.querySelector('#total-amount')
let totalSum = 0

donatesForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const donateItem = new DonateBlock()
  donatesContainer.append(donateItem.render(input.value))

  totalSum += Number(input.value)
  totalAmount.innerText = `${totalSum}.00 $`
  input.value = ''
})
