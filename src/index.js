import cipher from './cipher.js';

    document.getElementById('btn-uno').addEventListener("click", function(){
        pantallaUno.style.display='none'; //ocultar
        pantallaDos.style.display='block';  //mostrar
    });

    document.getElementById('btn-dos').addEventListener("click", function(){
        pantallaDos.style.display='none'; //ocultar
        pantallaTres.style.display='block'; //ocultar
    });


    document.getElementById("mensaje1").addEventListener("keyup", function(){
        mensaje1.value = mensaje1.value.toUpperCase();

    },true);
    document.getElementById("cifrar").addEventListener("click", function(){
        var texto = document.getElementById("mensaje1").value; //Para sacar el valor del texto a cifrar
        var desplazamiento = document.getElementById("desplazamiento").value; //Para sacar el número de desplazamiento
       // console.log('texto');
        //document.querySelector("#mensaje2").innerHTML = cipher.encode(texto, parseInt(desplazamiento));

        document.getElementById("mensaje2").innerHTML = cipher.encode(parseInt(desplazamiento), texto); //Para que se escriba en la caja de texto
    },true);

        document.getElementById("descifrar").addEventListener("click", function(){
            var texto = document.getElementById("mensaje1").value; //Para sacar el valor del texto a cifrar
            var desplazamiento = document.getElementById("desplazamiento").value; //Para sacar el número de desplazamiento
            //console.log('texto');
            //document.querySelector("#mensaje2").innerHTML = cipher.encode(texto, parseInt(desplazamiento));

            document.getElementById("mensaje2").innerHTML = cipher.decode(parseInt(desplazamiento), texto); //Para que se escriba en la caja de texto
});

console.log(cipher);

