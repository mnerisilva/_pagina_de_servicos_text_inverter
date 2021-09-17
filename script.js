let inputElement = document.querySelector('#texto');
let invertido = document.querySelector('.invertido');
let texto = '';
console.log(texto);
let bt_enviar = document.querySelector('.bt-enviar');
let arr = [];


bt_enviar.addEventListener('click', function(){
    texto = inputElement.value;
    console.log('entrou aqui ' + texto);
    if(texto.length > 0){
        console.log('depois aqui');
        texto = texto.split('');
        texto.map(elemento => arr.unshift(elemento));
        texto = arr.toString();
        texto = texto.replaceAll(',','');
        console.log(texto);
        invertido.textContent = texto;
    } else {
        alert('Preencha o campo texto!');
    }
});

