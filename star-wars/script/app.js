const form = document.querySelector('.form')
const result = document.querySelector('.result')
const correctAnswers = ['C','B','D']

form.addEventListener('submit', event => {
    event.preventDefault()

    // console.log('oii')

    let score = 0
    const userAnswers = [
        form.inputOpition1.value,
        form.inputOpition2.value,
        form.inputOpition3.value,
    ]

    userAnswers.forEach((elemet, index) => {
        if(elemet === correctAnswers[index]) {
            score+=33,33
        }
    })

    let contar = 0
    const timer = setInterval(() => {
        if (contar === score) {
            clearInterval(timer)
        }
        result.textContent = `Você asertou ${contar}%`
        contar++
    }, 50);
})