let btnAbrir = document.getElementById('btn_abrir');
let btnFechar = document.getElementById('btn_fechar');
let contentAberto = document.getElementById('mobile_aberto');

btnAbrir.addEventListener('click', ()=>{
    contentAberto.classList.add('show_content');
});

btnFechar.addEventListener('click', ()=>{
    contentAberto.classList.remove('show_content');
});



