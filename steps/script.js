const progresso = document.getElementById('progresso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {     /* Não faz com que os numeros passem de 4 */
        currentActive = circles.length
    }
    uptade()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {   /* Não faz com que os numeros fiquem menores que 1 */
        currentActive = 1
    }

    uptade()
})

function uptade(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    progresso.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    if(currentActive ===1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }

}