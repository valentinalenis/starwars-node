const fetch = require('node-fetch');
const pplaneta = require('./../models/planets');


let url =`https://swapi.dev/api/planets/`;
let resultPlanets = new Array();
let resPlan={p1:{}, p2:{},p3:{},p4:{},p5:{},p6:{}};

var jsonArray={};
fetch(url).then((res) =>{
    return res.json();
}).then((json)=>{
    planetsData(JSON.stringify(json));
});

function planetsData(plan){

   let list = JSON.parse(plan);

  for (let index = 0; index < list.results.length; index++) {
      if(index==0){
        resPlan.p1.name = (list.results[index].name);
        resPlan.p1.terreno = (list.results[index].terrain);
        resPlan.p1.gravedad = (list.results[index].gravity );
        resPlan.p1.diametro = (list.results[index].diameter);
        resPlan.p1.poblacion  = (list.results[index].population);
      }else if(index==1){
        resPlan.p2.name = (list.results[index].name);
        resPlan.p2.terreno = (list.results[index].terrain);
        resPlan.p2.gravedad = (list.results[index].gravity );
        resPlan.p2.diametro = (list.results[index].diameter);
        resPlan.p2.poblacion  = (list.results[index].population);
      }
      else if(index==2){
        resPlan.p3.name = (list.results[index].name);
        resPlan.p3.terreno = (list.results[index].terrain);
        resPlan.p3.gravedad = (list.results[index].gravity );
        resPlan.p3.diametro = (list.results[index].diameter);
        resPlan.p3.poblacion  = (list.results[index].population);
      }else if(index==3){
        resPlan.p4.name = (list.results[index].name);
        resPlan.p4.terreno = (list.results[index].terrain);
        resPlan.p4.gravedad = (list.results[index].gravity );
        resPlan.p4.diametro = (list.results[index].diameter);
        resPlan.p4.poblacion  = (list.results[index].population);
      }else if(index==4){
        resPlan.p5.name = (list.results[index].name);
        resPlan.p5.terreno = (list.results[index].terrain);
        resPlan.p5.gravedad = (list.results[index].gravity );
        resPlan.p5.diametro = (list.results[index].diameter);
        resPlan.p5.poblacion  = (list.results[index].population);
      }else if(index==5){
        resPlan.p6.name = (list.results[index].name);
        resPlan.p6.terreno = (list.results[index].terrain);
        resPlan.p6.gravedad = (list.results[index].gravity );
        resPlan.p6.diametro = (list.results[index].diameter);
        resPlan.p6.poblacion  = (list.results[index].population);
      }

  }
        
   
}

function option1(params) {
    for (let index = 0; index < list.results.length; index++) {
        resultPlanets.push("Nombre: " + list.results[index].name+ "  Terreno: "+list.results[index].terrain + "-gravity: " + list.results[index].gravity + "-diameter: " + list.results[index].diameter + "-population: " + list.results[index].population)
       }
        for(obj in list.results){
           
           let nombre = (list.results[obj].name);
           resPlan.p1.name = nombre
           let terreno  = (list.results[obj].terrain );
           resPlan.terreno = terreno
           let gravedad  = (list.results[obj].gravity );
           resPlan.gravedad = gravedad
           let diametro = (list.results[obj].diameter);
           resPlan.diametro = diametro
           let poblacion  = (list.results[obj].population);
           resPlan.poblacion = poblacion
    
           let newPlaneta= pplaneta.planeta(nombre, terreno, gravedad, diametro, poblacion);
           resultPlan.push(newPlaneta);
           //console.log(pplaneta.planetaString(newPlaneta));   
       }
}

module.exports={
    resPlan
};
