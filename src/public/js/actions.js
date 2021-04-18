/*□□□□□□□□□□□□□□□□□□   EXAMNE FINAL NEXT BACKEND  □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/
/*□□□□□□□□□□□□□□□□□□   APP    actions.js  Principal  □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/

/*□□□□□□□□□□□□□□□□□□  1 .  BLOQUE CODIGO  DE BOTON MOSTRAR TODO  lin 1 a lin 18 □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/

document.getElementById('buscar').onclick=bajardatos /* ***** accion del boton *******/

function bajardatos(){

  mostrartod()

}
/* ***** asignacion imagen *******/
function preparetod(){
var apx = Math.round(Math.random()*(2-0))+0
var cax = Math.round(Math.random()*(5-3))+3
var cpx = Math.round(Math.random()*(8-6))+6
ap1=limg[apx].Imagen
ca1=limg[cax].Imagen
cp1=limg[cpx].Imagen
}



/** ****acciones mostrar todos */
function mostrartod (){

for (var i=0 ;i<=100 ;i++){
  preparetod()
  if (lis[i].Tipo=="Casa"){imgpredio=ca1}
  if (lis[i].Tipo=="Casa de Campo"){imgpredio=cp1}
  if (lis[i].Tipo=="Apartamento"){imgpredio=ap1}
  $(".panel").append('<div class="bloque1"> <li> <div class="cajon"> <div class="bloque1a"> <img src="'+imgpredio+'" /> </div><div class="bloque1b"> <div class="direccion"> Direccion  : '+lis[i].Direccion+' </div> <div class="ciudad">     Ciudad : '+lis[i].Ciudad+'  </div> <div class="telefono">   Teléfono : '+lis[i].Telefono+'  </div><div class="codigop">    Codigo Postal :'+lis[i].Codigo_Postal+'   </div><div class="tipo">       Tipo : '+lis[i].Tipo+'  </div><div class="precio">     Precio : <div class="prenum">  '+lis[i].Precio+'    </div>  </div></div></div> </li></div>')
  
}
}

/** □□□□□□□□□□□□□□□□□□ 2. Acceso a los datos □□□□□□□□□□□□□□□□□□**/
function accesdata () {
  
  $.ajax ({/* ***** bajar lista inmuebles *******/
    url:'data1.json',
    type:'GET',
    data:{},
    success: function (data){
    lis = data.slice()
    
    }
  })
  
  
  $.ajax ({/* ***** bajar imagenes *******/
    url:'data2.json',
    type:'GET',
    data:{},
    success: function (data){
    limg = data.slice()
   
    } 
  })

}

accesdata ()

/** □□□□□□□□□□□□□□□□□□ 3.  Logica para las busquedas □□□□□□□□□□□□□□□□□□*/
/** **** 3.1. Creacion de Lista de Ciudades *****/
