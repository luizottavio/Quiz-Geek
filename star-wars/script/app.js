const form = document.querySelector('.form')
const result = document.querySelector('.result')
const correctAnswers = ['C','B','D','D']
const formQuiz = event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputOpition1.value,
        form.inputOpition2.value,
        form.inputOpition3.value,
        form.inputOpition4.value
    ]

    userAnswers.forEach((elemet, index) => {
        if(elemet === correctAnswers[index]) {
            score+=25
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
}

form.addEventListener('submit', formQuiz)