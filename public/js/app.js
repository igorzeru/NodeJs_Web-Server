const form = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#msg')
const msg2 = document.querySelector('#msg-2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const place = search.value
    msg.textContent = 'Loading...'
    fetch('/weather?address=' + place).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            return msg.textContent = data.error
        }
        console.log(data)
        msg.textContent = data.location
        msg2.textContent = data.forecast
    })
})
})