const Observer =  new IntersectionObserver((entrada) =>{
    entrada.forEach((entra) => {
        if (entra.isIntersecting){
            entra.target.classList.add('show')
        } else {
            entra.target.classList.remove('show')
        }
    })
})


const elementos = document.querySelectorAll('.hidden')


elementos.forEach((elemeto) => Observer.observe(elemeto))