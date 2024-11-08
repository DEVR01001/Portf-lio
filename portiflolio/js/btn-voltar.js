const btnVoltar = document.getElementById('voltar')






// VOLTA PARA O TOPO NUM EVENTO DE CLICK

btnVoltar.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    })
})


