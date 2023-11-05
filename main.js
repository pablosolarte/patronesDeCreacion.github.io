var EntradaFactura =  (function () {
  function EntradaFactura() {
  }


window.mensaje = function  (color, mytexto){
let parrafo = document.createElement("p");
parrafo.style.color=color;
let leer = document.createTextNode(mytexto); 
parrafo.appendChild(leer); 
document.getElementById("contenido").appendChild(parrafo);
}


EntradaFactura.prototype.procesar = function (codigo) {
window.mensaje("blue","Procesando entrada de factura... #"+codigo);
  };
  return EntradaFactura;

}());



var EntradaCompra =  (function () {
  function EntradaCompra() {
  }
  EntradaCompra.prototype.procesar = function (codigo) {     
   window.mensaje("blue","Procesando entrada de compra... #"+codigo);
  };
  return EntradaCompra;
}());



var EntradaPedido =  (function () {
  function EntradaPedido() {
  }
  EntradaPedido.prototype.procesar = function (codigo) {     
   window.mensaje("blue","Procesando de pedido ... #"+codigo);
  };
  return EntradaPedido;
}());




var SalidaFactura =  (function () {
  function SalidaFactura() {
  }
  SalidaFactura.prototype.procesar = function (codigo) {   
      window.mensaje("green","Procesando salida de factura... #"+codigo);
  };
  return SalidaFactura;
}());



var SalidaCompra = (function () {
  function SalidaCompra() {
  }
  SalidaCompra.prototype.procesar = function (codigo) {
  window.mensaje("green","Procesando salida de compra... #"+codigo);
  };
  return SalidaCompra;
}());


var MixtaFactura =  (function () {
  function MixtaFactura() {
  }
  MixtaFactura.prototype.procesar = function (codigo) {    
  window.mensaje("orange","Procesando informe mixto de factura... #"+codigo);
  };
  return MixtaFactura;
}());




var MixtaCompra = (function () {
  function MixtaCompra() {
  }
  MixtaCompra.prototype.procesar = function (codigo) {    
      window.mensaje("orange","Procesando informe mixto de compra... #"+codigo);
  };
  return MixtaCompra;
}());



var PedidoFactura =  (function () {
  function PedidoFactura() {
  }
  PedidoFactura.prototype.procesar = function (codigo) {    
  window.mensaje("orange","Procesando informe mixto de factura... #"+codigo);
  };
  return PedidoFactura;
}());



var FabricaEntrada =  (function () {
  function FabricaEntrada() {
  }
  FabricaEntrada.prototype.crearInforme = function (nombre) {
      if (nombre.startsWith("ENT_FAC")) {
          return new EntradaFactura();
      }
      else if (nombre.startsWith("ENT_COM")) {
          return new EntradaCompra();
      }
      else if (nombre.startsWith("ENT_PED")) {
        return new EntradaPedido();
    }
      
  };
  return FabricaEntrada;
}());



var FabricaSalida = (function () {
  function FabricaSalida() {
  }
  FabricaSalida.prototype.crearInforme = function (nombre) {
      if (nombre.startsWith("SAL_FAC")) {
          return new SalidaFactura();
      }
      else if (nombre.startsWith("SAL_COM")) {
          return new SalidaCompra();
      }
     
  };
  return FabricaSalida;
}());


var FabricaMixta = (function () {
  function FabricaMixta() {
  }
  FabricaMixta.prototype.crearInforme = function (nombre) {
      if (nombre.startsWith("MIX_FAC")) {
          return new MixtaFactura();
      }
      else if (nombre.startsWith("MIX_COM")) {
          return new MixtaCompra();
      }
     
  };
  return FabricaMixta;
}());



var fabricaEntrada = new FabricaEntrada();
var fabricaSalida = new FabricaSalida();
var fabricaMixta = new FabricaMixta();



document.getElementById("enFact").value="ENT_FAC_001.txt"; 



function infoEntrarFact(){
  
let campotxt = document.getElementById("enFact").value;
let primerasLetras=campotxt.substring(0, 3);

if(primerasLetras=="ENT"){
  var resul = fabricaEntrada.crearInforme(campotxt);
  var numero=campotxt.replace(/\D+/g, "");// borrar letras y deja los numeros
  resul.procesar(numero);
}else if(primerasLetras=="SAL"){
  var resul = fabricaSalida.crearInforme(campotxt);
  var numero=campotxt.replace(/\D+/g, "");
  resul.procesar(numero);
}else if(primerasLetras=="MIX"){
  var resul = fabricaMixta.crearInforme(campotxt);
  var numero=campotxt.replace(/\D+/g, "");
  resul.procesar(numero);
}else{
  var numero=campotxt.replace(/\D+/g, "");
  window.mensaje("red","Este informe no es permitido no cumple:  #"+numero); 
}

}


function tutorial(){

  if(document.getElementById("tutor").style.display=="block"){
    document.getElementById("tutor").style.display="none";
  }else if(document.getElementById("tutor").style.display=="none"){
    document.getElementById("tutor").style.display="block";
  }


}