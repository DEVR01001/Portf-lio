const btnVoltar = document.getElementById('voltar')

// VOLTA PARA O TOPO NUM EVENTO DE CLICK

btnVoltar.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        

    })
})




// LIGHTMODE E DARKMODE
// Obtem o estado do tema armazenado no localStorage
let lightmode = localStorage.getItem('lightmode');

const icon_theme = document.getElementById('icon_theme');

// Função para ativar o modo claro
const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

// Função para desativar o modo claro
const disableLightMode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'inactive');
};

// Alterna o tema ao clicar no botão
icon_theme.addEventListener('click', () => {
    if (lightmode === 'active') {
        disableLightMode();
        lightmode = 'inactive';
    } else {
        enableLightmode();
        lightmode = 'active';
    }
});

// Verifica o estado inicial do tema
if (lightmode === 'active') {
    enableLightmode();
}
