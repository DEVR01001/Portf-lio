const btnVoltar = document.getElementById('voltar')

// VOLTA PARA O TOPO NUM EVENTO DE CLICK

btnVoltar.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        

    })
})





let lightmode = localStorage.getItem('lightmode');

const icon_theme = document.getElementById('icon_theme');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};


const disableLightMode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'inactive');
};


icon_theme.addEventListener('click', () => {
    if (lightmode === 'active') {
        disableLightMode();
        lightmode = 'inactive';
    } else {
        enableLightmode();
        lightmode = 'active';
    }
});


if (lightmode === 'active') {
    enableLightmode();
}









