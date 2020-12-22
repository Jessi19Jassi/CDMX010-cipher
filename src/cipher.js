const cipher = {

  encode: function(desplazamiento, texto){
      var resultado = "";
   
      if(desplazamiento == null){
        throw new TypeError('Not Valid');
      }
      else if(texto == []){
          throw new TypeError('Not Valid');
        }
        else if(desplazamiento == 0){
          throw new TypeError('Not Valid');
        }
      

    for(let i=0; i < texto.length; i++){ 
      var text = texto.charCodeAt(i);  //Pasar texto a ASCII
     if(text >= 65 && text <= 90) {
        resultado += String.fromCharCode((text - 65 + desplazamiento) % 26 + 65); //fromCharCode: Convierte de ascii a string
       
     }else{
          resultado += texto.charAt(i);
        }
    }
    return resultado;


  },

  decode: function(desplazamiento, texto){
    var resultado2 = "";
    var offset = 26-(desplazamiento%26);

    if(desplazamiento == null){
      throw new TypeError('Not Valid');
    }
    else if(texto == []){
        throw new TypeError('Not Valid');
      }
      else if(desplazamiento == 0){
        throw new TypeError('Not Valid');
      }

    for(let i=0; i < texto.length; i++){ 
      let text = texto.charCodeAt(i);  //Pasar texto a ASCII

          if(text >= 65 && text <= 90) {
            resultado2 += String.fromCharCode((text - 65 + offset) % 26 + 65); //fromCharCode: Convierte de ascii a string
          console.log(resultado2);
          }
          else{
            resultado2 += texto.charAt(i);
          }
    }  
  return resultado2;
  }
}

export default cipher;
