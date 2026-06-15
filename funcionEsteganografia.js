/* * Implementa funciones que permiten:
 * Mostrar: Cover Image - Hide Image 
 * Realizar la Esteganografía y muestrar la Stego-Image
 * Recuperar la imagen escondida
 * Limpiar todos los canvas
 * * Las funciones son llamadas en index.html 
 * * Editor: Roberto Méndez
 * Created on : Mar 26, 2026, 11:16:53 PM
 * Editado 10 Abril 2026
 */

var coverImg = null, hideImg = null;
var stegoImg = null;

/*
Función que carga la cover-image que sevirá
de pantalla para ocultar otra imagen.
*/
function uploadF(){
  var fileInput = document.getElementById("finput");
  var canvas1 = document.getElementById("d1");
  coverImg = new SimpleImage(fileInput);
  coverImg.drawTo(canvas1);
}

/*
Función que carga la imagen a ocultar en pantalla
*/
function uploadHF(){
  var hideFileInput =              
      document.getElementById("hfinput");
  var canvas2 = document.getElementById("d2");
  hideImg = new SimpleImage(hideFileInput);
  hideImg.drawTo(canvas2);
}

/*
Función que realiza la Esteganografía
*/
function hideMessage(){
  var x,y, aCIb=[], aCIh=[];
  var hidePix, stegoPix;
  var nr, ng , nb;
  var hScreen = document.getElementById("hideS");
  if( coverImg === null || !coverImg.complete())
     {
       alert("Image bluff not loaded");
       return;
     }
   if( hideImg === null || !hideImg.complete())
     {
       alert("Image to hide not loaded");
       return;
     }
     
    if(!matchImage())
      {
        alert("cover image must be in size, equal or more larger \n\
               that the image to hide");
       return;
      }
   stegoImg = new SimpleImage(coverImg.getWidth(), coverImg.getHeight());
  
   for(var coverPix of coverImg.values() ){
    x = coverPix.getX();
    y = coverPix.getY();
   
    hidePix = hideImg.getPixel(x,y);
    aCIb = getSignificant(coverPix);
    aCIh = getSignificant(hidePix);
    stegoPix = stegoImg.getPixel(x,y);
    nr = aCIb[0]*16 + aCIh[0];
    ng = aCIb[1]*16 + aCIh[1];
    nb = aCIb[2]*16 + aCIh[2];
    stegoPix.setRed(nr);
    stegoPix.setGreen(ng);
    stegoPix.setBlue(nb);      
   }
   stegoImg.drawTo(hScreen);
}

function getMessage(){
  var nr, ng , nb;
  var hScreen = document.getElementById("hideS");
  
  if( stegoImg === null || !stegoImg.complete()){
     alert("Not hide message finded");
     return;
  }
     
  for(var stegoPix of stegoImg.values() ){
    nr = stegoPix.getRed();
    ng = stegoPix.getGreen();
    nb = stegoPix.getBlue(); 
    nr= (nr%16)*16;
    ng= (ng%16)*16;
    nb= (nb%16)*16;
    stegoPix.setRed(nr);
    stegoPix.setGreen(ng);
    stegoPix.setBlue(nb);      
  }
  stegoImg.drawTo(hScreen);
}

/*
 * Toma los 4 bits mas significatovos de cada color en un pixel
 * Es llamada por "hideMessage()"
 * @param {type} pixel
 * @returns {Array}
 */
function getSignificant(pixel){
  var r,g,b, arraySigColor;
  r = pixel.getRed();
  g = pixel.getGreen();
  b = pixel.getBlue();
  r = Math.floor(r/16);
  g = Math.floor(g/16);
  b = Math.floor(b/16);
  arraySigColor = [r,g,b];
  return arraySigColor;
}

/*
 * Función que verifica y ajusta el tamaño de la cover-image al del hide-image, 
 * si la primera es más grande, prohibiendo que cover-image < hide-image en
 * alto o ancho. 
 */
function matchImage(){
  var w =  hideImg.getWidth();
  var h =  hideImg.getHeight();
  if (coverImg.getWidth() < w || coverImg.getHeight() < h){
    return false;
  }
    else if(coverImg.getWidth() > w || coverImg.getHeight() > h){
      coverImg = crop(coverImg, w, h);
      return true;
    }else{
       return true;
    }
}

/*
 * Función que  ajusta el tamaño de la cover-image al del hide-image, 
 * dejándola del mismo alto y ancho.
 * Es llamada por  "matchImage()"
 */

function crop(image, width, height){
  //  print(width);  // error
  var nimage = new SimpleImage(width, height); 
    for(var i = 0; i< width; i++){
      for(var j = 0; j< height; j++){
        nimage.setPixel(i,j,image.getPixel(i,j));
      }
    }
  return nimage;
}

function clearCanvas(){
  var canvas1 = document.getElementById("d1");
  var canvas2 = document.getElementById("d2");
  var hScreen = document.getElementById("hideS");
  var cd1 = canvas1.getContext("2d");
  var cd2 = canvas2.getContext("2d");
  var cgs = hScreen.getContext("2d");
  cd1.clearRect(0,0,canvas1.width, canvas1.height);       
  cd2.clearRect(0,0,canvas2.width, canvas2.height );
  cgs.clearRect(0,0,hScreen.width, hScreen.height);
  coverImg = null;
  hideImg = null;
} 
