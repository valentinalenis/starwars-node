const fetch = require('node-fetch');

let url =`https://swapi.dev/api/starships/`;

let resNave=[];

let nombre;
let modelo;
let fabricante;
let pasajeros;

fetch(url).then((res) =>{
    return res.json();
}).then((json)=>{
    result(JSON.stringify(json));
});

function result(params) {
    
    let list = JSON.parse(params);
    let len = 0;
    let current =0;

    for (let index = 0; index < list.results.length; index++) {  
        current = list.results[index].length
        if( current > len){
           
            len = current;         
            nombre = list.results[index].name;
            modelo= list.results[index].model;
            fabricante = list.results[index].manufacturer;
            pasajeros =list.results[index].passengers;
            
        }
        
    }
    resNave.push("Nombre: " + nombre+ "  modelo: "+ modelo + "-fabricante: " + fabricante + "-pasajeros: " + pasajeros );
}
function final() {
    
}

module.exports={
    resNave
};