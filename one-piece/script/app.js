const form = document.querySelector('.form')
const result = document.querySelector('.result')
const correctAnswers = ['C','D','A','C']

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0
    const userAnswers = [
        form.inputOpition1.value,
        form.inputOpition2.value,
        form.inputOpition3.value,
        form.inputOpition4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]) {
            score+=25
        }
    })

    let couter = 0

    const timer = setInterval(() => {
        if (couter === score){
            clearInterval(timer)
        }
        result.textContent = `Você acertou ${couter}%`
        couter++
    }, 50)
})