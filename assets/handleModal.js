const data = document.querySelectorAll('.insta-feedback-item')

const fbItems = Array.from(data)

console.log(data)

fbItems.map(item => {
    item.addEventListener('click', () => {
        const modal = item.querySelector('.pop-up-insta-feedback')
        modal.classList.add('active')

        const modalItems = modal.querySelector('.pop-up-insta-feedback-item')
        modalItems.addEventListener('click', e => {
            e.stopPropagation()
        })

        modal.addEventListener('click', (e) => {
             modal.classList.remove('active')
             e.stopPropagation()
        })
    })
})