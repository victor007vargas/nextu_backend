
 preciok=0;
/** □□□□□□□□□□□□□□□□□□ 1.  Inicio Select □□□□□□□□□□□□□□□□□□*/
$(document).ready(function(){
    $('select').material_select();
    
      });
 /** □□□□□□□□□□□□□□□□□□*/







 /** □□□□□□□□□□□□□□□□□□ 2.  Acciones del boton checbox personalizar □□□□□□□□□□□□□□□□□□*/


  function setSearch() {
    let busqueda = $('#checkPersonalizada')
    busqueda.on('change', (e) => {
      if (this.customSearch == false) {
        this.customSearch = true
        $(".panel").empty();
        $(".btmostod").empty();
        $(".btmostod").append('<button id="buscartod" class="btn waves-effect waves-light blue" type="button">Ver Todo</button>');
        document.getElementById('buscartod').onclick=bajardatos /* ***** accion del boton buscar todo *******/
      } else {
        this.customSearch = false
        $(".panel").empty();
        $(".btmostod").empty();
        $(".btmostod").append('<button id="buscarsel" class="btn waves-effect waves-light blue" type="button">Ver Selección</button>');
        document.getElementById('buscarsel').onclick=bajardatosel /* ***** accion del boton buscar todo *******/
        if(valrangomin==""){alert("ingrese un valor minimo")}
        if(valrangomax==""){alert("ingrese un valor maximo")}

      }
      $('#personalizada').toggleClass('invisible')
    })
  }

  setSearch()


/** □□□□□□□□□□□□□□□□□□ 3.  Logica para las busquedas □□□□□□□□□□□□□□□□□□*/


function mosper(){









  for (var i=0 ;i<=100 ;i++){
    preparetod();
  
    if (lis[i].Tipo=="Casa"){imgpredio=ca1}
    if (lis[i].Tipo=="Casa de Campo"){imgpredio=cp1}
    if (lis[i].Tipo=="Apartamento"){imgpredio=ap1}

  }
// *********   logica busqueda precio ********

}


