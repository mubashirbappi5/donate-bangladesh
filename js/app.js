
const historyBtn = document.getElementById('history-btn')
const donationBtn = document.getElementById('donation-btn')
const navberscroll =document.getElementById('nav-scrol')
const historySection = document.getElementById('history-section')
const donationSection = document.getElementById('donation-section')
const donateNowBtn = document.getElementById('donate-now-btn')
const header1 = document.getElementById('header-1')
const header2 = document.getElementById('header2')
const header3 = document.getElementById('header-3')

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
     if(mainAmount < donateAmountInput){
        alert('insufficient balance')
        return
    }
    else if(donateAmountInput ==0){
        alert("minimum 1 taka you can donate")
        return
       }
     const donatetotal = donateAmountInput + donateDigitnumber
     document.getElementById('donate-digit').innerText = donatetotal
     document.getElementById('main-amount').innerText = availableAmount

    //  history section
    const div = document.createElement('div')
    div.innerHTML = `<div class="border rounded-lg p-8">
           <h3 class="font-bold text-xl text-black">${donateAmountInput} Taka is  ${header1.innerText}</h3>
            <p> ${Date()} </p>
          </div>`

     historySection.appendChild(div)

     
    

})



// card-2
document.getElementById('donte-now-2').addEventListener("click",function(e){
    e.preventDefault()
    const donateInput2 = getinputValueByid('donate-input-2');
   if(isNaN(donateInput2)){
    alert("please provide valid amount number")
    return
   }

   const donateDigit2 = gettextNumberByid('donate-digit2')
   const mainAmount = gettextNumberByid('main-amount')
   if(mainAmount < donateInput2  ){
       alert("insufficient balance")
       return
   }
   else if(donateInput2 ==0){
    alert("minimum 1 taka you can donate")
    return
   }
   const availableAmount = mainAmount - donateInput2
   const total2 = donateDigit2+donateInput2
   document.getElementById('main-amount').innerText = availableAmount
   document.getElementById('donate-digit2').innerText = total2
// history
   const div2 = document.createElement('div')
    div2.innerHTML = `<div class="border rounded-lg p-8">
           <h3 class="font-bold text-xl text-black">${donateInput2} Taka is ${header2.innerText}</h3>
            <p> ${Date()} </p>
          </div>`

        document.getElementById('history-section').appendChild(div2)
   
})

// card-3
document.getElementById('donate-now-3').addEventListener("click",function(e){
    e.preventDefault()
    const donateinput3 = getinputValueByid('donate-input-3');
    if(isNaN(donateinput3)){
        alert("please provide valid amount number")
        return
      
    }
    const donateDigit3 = gettextNumberByid('donate-digit3')
    const mainAmount = gettextNumberByid('main-amount')
    if(mainAmount < donateinput3){
        alert("insufficient balance")
        return
    }
    else if(donateinput3 == 0){
        alert("minimum 1 taka you can donate")
        return
    }
    const total3 = donateDigit3 + donateinput3 
   
    const availableAmount = mainAmount - donateinput3 
   
    document.getElementById('donate-digit3').innerText = total3
    document.getElementById('main-amount').innerText = availableAmount

// history
    const div3 = document.createElement('div')
    div3.innerHTML = `<div class="border rounded-lg p-8">
           <h3 class="font-bold text-xl text-black">${donateinput3} Taka is ${header3.innerText}</h3>
           <p> ${Date()} </p>
          </div>`

        document.getElementById('history-section').appendChild(div3)
})
