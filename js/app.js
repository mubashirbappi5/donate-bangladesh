
const historyBtn = document.getElementById('history-btn')
const donationBtn = document.getElementById('donation-btn')
const navberscroll =document.getElementById('nav-scrol')
const historySection = document.getElementById('history-section')
const donationSection = document.getElementById('donation-section')
const donateNowBtn = document.getElementById('donate-now-btn')
const header1 = document.getElementById('header-1')

const donatesowDigt = document.getElementById('donate-digit')
// input value
function getinputValueByid(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}
// text number value function
function gettextNumberByid(id){
    const textValue = document.getElementById(id).innerText
    const number = parseFloat(textValue)
    return number
}




// nav bar
window.addEventListener("scroll",function(){
    if(this.window.scrollY >50){
      navberscroll.classList.add('bg-white/50', 'backdrop-blur-lg', 'shadow-sm')
    }

})
// blg button
document.getElementById('blog-btn').addEventListener("click",function(){
    window.location.href ='blog.html'
})
// history button
document.getElementById('history-btn').addEventListener("click",function(){
    
    historyBtn.classList.add('bg-primary','border-none','text-black')
    donationBtn.classList.remove('bg-primary', 'border-none')
    historySection.classList.remove('hidden')
    donationSection.classList.add('hidden')

})
// donation button
document.getElementById('donation-btn').addEventListener("click",function(){
    this.classList.add('bg-primary', 'border-none')
    historyBtn.classList.remove('bg-primary','border-none','text-black')
    historySection.classList.add('hidden')
    donationSection.classList.remove('hidden')
})

// donation now btn
document.getElementById('donate-now-btn').addEventListener("click",function(event){
    event.preventDefault()
    const donateAmountInput = getinputValueByid('donate-amount-input');
    if(isNaN(donateAmountInput)){
        alert("please provide valid amount number")
        return
    }
   
    
     const donateDigitnumber = gettextNumberByid('donate-digit')
     const mainAmount = gettextNumberByid('main-amount')
     const availableAmount = mainAmount - donateAmountInput
     if(availableAmount < donateAmountInput){
        alert('insufficient balance')
        return
    }
     const donatetotal = donateAmountInput + donateDigitnumber
     document.getElementById('donate-digit').innerText = donatetotal
     document.getElementById('main-amount').innerText = availableAmount

    //  history section
    const div = document.createElement('div')
    div.innerHTML = `<div class="border rounded-lg p-8">
           <h3 class="font-bold text-xl text-black">${donateAmountInput} Taka is ${header1.innerText}</h3>
          </div>`

     historySection.appendChild(div)

     
    

})