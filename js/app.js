
const historyBtn = document.getElementById('history-btn')
const donationBtn = document.getElementById('donation-btn')
const navberscroll =document.getElementById('nav-scrol')
const historySection = document.getElementById('history-section')
const donationSection = document.getElementById('donation-section')




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