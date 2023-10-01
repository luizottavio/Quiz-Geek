const form = document.querySelector('.form')
const correctAnswers = ['A','C','D']
const result = document.querySelector('.result')


form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0
    let userAnswers = [
        form.inputOpition1.value,
        form.inputOpition2.value,
        form.inputOpition3.value,
    ]
 
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]) {
            score+= 25
        }
    })

    let couter = 0

    const timer = setInterval(() => {
        if (couter === score) {
            clearInterval(timer)
        }

        result.textContent = `Você acetou ${couter}%`
        couter++
    }, 50)
})