// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//     response.json().then((data) => {
//         if(data.error) {
//             return console.log(data.error)
//         }
//         console.log(data)
//     })
// })

const form = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#msg')
const msg2 = document.querySelector('#msg-2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const place = search.value
    msg.textContent = 'Loading...'
    fetch('http://localhost:3000/weather?address=' + place).then((response) => {
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