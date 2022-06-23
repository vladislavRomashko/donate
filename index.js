import './index.css';
import {getTodayDateFormat} from './utils/data'



const donatesContainer= document.querySelector('.donates-container__donates')
const donatesForm= document.querySelector('.donate-form')
const input= donatesForm.querySelector('.donate-form__donate-input')
const totalAmount = donatesForm.querySelector('#total-amount')
let totalSum = 0

donatesForm.addEventListener('submit', event=>{
    event.preventDefault()

    const donateItem = document.createElement('div')
    donateItem.className = 'donate-item'
    donateItem.innerHTML = `${getTodayDateFormat(new Date())} - <b>${input.value}$</b>`
    donatesContainer.append(donateItem)
    let num = Number(input.value).toFixed(2)
    console.log(num)
    totalSum += parseFloat(num)
    totalAmount.innerText = `${totalSum}$`
    input.value = ''
    
    
})

