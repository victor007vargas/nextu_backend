/*□□□□□□□□□□□□□□□□□□   EXAMNE FINAL NEXT BACKEND  □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/
/*□□□□□□□□□□□□□□□□□□   APP    actions.js  Principal  □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/

/*□□□□□□□□□□□□□□□□□□  1 .  BLOQUE CODIGO  DE BOTON MOSTRAR TODO  lin 1 a lin 18 □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/

document.getElementById('buscartod').onclick=bajardatos /* ***** accion del boton buscar todo *******/

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

/** □□□□□□□□□□□□□□□□□□ 2. Acceso a los datos del Servidor □□□□□□□□□□□□□□□□□□**/
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

/*□□□□□□□□□□□□□□□□□□  2 .  BLOQUE CODIGO  DE BOTON MOSTRAR SELECCION  lin 64  □□□□□□□□□□□□□□□□□□□□□□□□□□-->*/

function bajardatosel(){

  $.ajax ({/* ***** bajar lista inmuebles *******/
    url:'data1.json',
    type:'GET',
    data:{},
    success: function (data){ /* !! Inicio callback succes Ajax busqueda*/ 
     
   for (var i=0 ;i<=100 ;i++){

   preparetod()

   if (data[i].Tipo=="Casa"){imgpredio=ca1}
   if (data[i].Tipo=="Casa de Campo"){imgpredio=cp1}
   if (data[i].Tipo=="Apartamento"){imgpredio=ap1}
        $selectciu = document.getElementById("ciudad");
        const indicec = $selectciu.selectedIndex;
        if (indicec=== -1) return;
        const opselciu = $selectciu.options[indicec];
        $selecti = document.getElementById("tipo");
        const indicet = $selecti.selectedIndex;
        if (indicet=== -1) return;
        const opseltip = $selecti.options[indicet];
        valrangomin = document.getElementById("rangomin").value;
        valrangomax = document.getElementById("rangomax").value;
        valmin  = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(valrangomin);
        valmax =  new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(valrangomax);
        valmin= valmin.replace(".00","");
        valmax= valmax.replace(".00","");
       


   
   if (data[i].Ciudad==opselciu.text){
    if (data[i].Tipo==opseltip.text){
    
      if( (data[i].Precio  > valmin )&& (data[i].Precio  < valmax)){ 
        $(".panel").append('<div class="bloque1"> <li> <div class="cajon"> <div class="bloque1a"> <img src="'+imgpredio+'" /> </div><div class="bloque1b"> <div class="direccion"> Direccion  : '+data[i].Direccion+' </div> <div class="ciudad">     Ciudad : '+data[i].Ciudad+'  </div> <div class="telefono">   Teléfono : '+data[i].Telefono+'  </div><div class="codigop">    Codigo Postal :'+data[i].Codigo_Postal+'   </div><div class="tipo">       Tipo : '+data[i].Tipo+'  </div><div class="precio">     Precio : <div class="prenum">  '+data[i].Precio+'    </div>  </div></div></div> </li></div>')
          } /* <=== Llave if precio*/
    else {}
    }/* <=== Llave if filtro tipo*/
     }  /* <=== Llave if filtro ciudad*/

 
 



if(opselciu.text=="Escoge una ciudad"){
  if (data[i].Tipo==opseltip.text){
        if( (data[i].Precio  > valmin )&& (data[i].Precio  < valmax)){ 
      $(".panel").append('<div class="bloque1"> <li> <div class="cajon"> <div class="bloque1a"> <img src="'+imgpredio+'" /> </div><div class="bloque1b"> <div class="direccion"> Direccion  : '+data[i].Direccion+' </div> <div class="ciudad">     Ciudad : '+data[i].Ciudad+'  </div> <div class="telefono">   Teléfono : '+data[i].Telefono+'  </div><div class="codigop">    Codigo Postal :'+data[i].Codigo_Postal+'   </div><div class="tipo">       Tipo : '+data[i].Tipo+'  </div><div class="precio">     Precio : <div class="prenum">  '+data[i].Precio+'    </div>  </div></div></div> </li></div>')
        } /* <=== Llave if precio*/
  else {}
  }/* <=== Llave if filtro tipo*/

}




if (data[i].Ciudad==opselciu.text){
  if (opseltip.text=="Escoge un tipo"){
      if( (data[i].Precio  > valmin )&& (data[i].Precio  < valmax)){ 
      $(".panel").append('<div class="bloque1"> <li> <div class="cajon"> <div class="bloque1a"> <img src="'+imgpredio+'" /> </div><div class="bloque1b"> <div class="direccion"> Direccion  : '+data[i].Direccion+' </div> <div class="ciudad">     Ciudad : '+data[i].Ciudad+'  </div> <div class="telefono">   Teléfono : '+data[i].Telefono+'  </div><div class="codigop">    Codigo Postal :'+data[i].Codigo_Postal+'   </div><div class="tipo">       Tipo : '+data[i].Tipo+'  </div><div class="precio">     Precio : <div class="prenum">  '+data[i].Precio+'    </div>  </div></div></div> </li></div>')
        } /* <=== Llave if precio*/
  else {}
  }/* <=== Llave if filtro tipo*/
   }  /* <=== Llave if filtro ciudad*/


   if (opselciu.text=="Escoge una ciudad"){
    if (opseltip.text=="Escoge un tipo"){
        if( (data[i].Precio  > valmin )&& (data[i].Precio  < valmax)){ 
        $(".panel").append('<div class="bloque1"> <li> <div class="cajon"> <div class="bloque1a"> <img src="'+imgpredio+'" /> </div><div class="bloque1b"> <div class="direccion"> Direccion  : '+data[i].Direccion+' </div> <div class="ciudad">     Ciudad : '+data[i].Ciudad+'  </div> <div class="telefono">   Teléfono : '+data[i].Telefono+'  </div><div class="codigop">    Codigo Postal :'+data[i].Codigo_Postal+'   </div><div class="tipo">       Tipo : '+data[i].Tipo+'  </div><div class="precio">     Precio : <div class="prenum">  '+data[i].Precio+'    </div>  </div></div></div> </li></div>')
          } /* <=== Llave if precio*/
    else {}
    }/* <=== Llave if filtro tipo*/
     }  /* <=== Llave if filtro ciudad*/









   }/* <=== Llave if iteracio*/ 
    }/* <===    Fin llave del callback succes Ajax busqueda*/ 
  })/* <===    Fin Ajax bajar lista inmuebles*/

  /* ************ Logica afinamiento de busqueda por condiciones especiales  ****/








  /******* Fin logica afinamiento */
  
  $.ajax ({/* ***** bajar imagenes *******/
    url:'data2.json',
    type:'GET',
    data:{},
    success: function (data){
    var limg = data.slice()
   
    } 
  })









}
  
  



