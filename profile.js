const colorBtn = document.querySelector("#color")
const placeBtn = document.querySelector("#place")
const ritualBtn = document.querySelector("#ritual")

const colorAlert = () => {
    alert('My favorite color is Orange')
}
const placeAlert = () => {
    alert('My favorite place is Arizona')
}
const ritualAlert = () => {
    alert('My favorite ritual is Listening to Phineas & Ferb while falling asleep')
}

colorBtn.addEventListener('click', colorAlert)
placeBtn.addEventListener('click', placeAlert)
ritualBtn.addEventListener('click', ritualAlert)