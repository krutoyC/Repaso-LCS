let arregloDeSeries=[];
 function agregarSeries(){
     let cargar=document.getElementById("serie").value;
     arregloDeSeries.push(cargar);
 console.log(arregloDeSeries);

 //para guardar los datos en LCS
 localStorage.setItem("nombreClaveInventadoPorMiKey",JSON.stringify(arregloDeSeries));
 mostrarSeriesDeLCS();
 }

 function mostrarSeriesDeLCS(){
     if(localStorage.length>0){
     //aqui el local storage no esta vacio    
     let almacenamientoDeLCS=JSON.parse(localStorage.getItem("nombreClaveInventadoPorMiKey"));

let padreUl=document.getElementById("padreListaSeries");
padreUl.innerHTML=""; 
// for(let i=0; almacenamientoDeLCS.length; i++){}
for (const valor of almacenamientoDeLCS){
    let li= document.createElement("li");
    li.innerText = valor;
    li.className = "list-group-item";
    li.id=valor;
    padreUl.appendChild(li);
}


     }else{

     }
 }