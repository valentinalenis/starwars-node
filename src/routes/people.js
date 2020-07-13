const fetch = require('node-fetch');

let url =`https://swapi.dev/api/people`;
let resPeople={p1:{}, p2:{},p3:{},p4:{},p5:{},p6:{}};

fetch(url).then((res) =>{
    return res.json();
}).then((json)=>{
    result(JSON.stringify(json));
});

function result(people) {
    let list = JSON.parse(people);
    
    for (let index = 0; index < list.results.length; index++) {
        if(index==0){
          resPeople.p1.name = (list.results[index].name);
          resPeople.p1.gender = (list.results[index].gender);
          resPeople.p1.hair_color = (list.results[index].hair_color );
          resPeople.p1.skin_color = (list.results[index].skin_color);
          resPeople.p1.eye_color  = (list.results[index].eye_color);
          resPeople.p1.height  = (list.results[index].height);
          resPeople.p1.homeworld  = (list.results[index].homeworld);
          resPeople.p1.species  = (list.results[index].species);
        }else if(index==1){
          resPeople.p2.name = (list.results[index].name);
          resPeople.p2.terreno = (list.results[index].gender);
          resPeople.p2.gravedad = (list.results[index].hair_color );
          resPeople.p2.diametro = (list.results[index].skin_color);
          resPeople.p2.poblacion  = (list.results[index].eye_color);
          resPeople.p2.height  = (list.results[index].height);
          resPeople.p2.homeworld  = (list.results[index].homeworld);
          resPeople.p2.species  = (list.results[index].species);
        }
        else if(index==2){
          resPeople.p3.name = (list.results[index].name);
          resPeople.p3.terreno = (list.results[index].gender);
          resPeople.p3.gravedad = (list.results[index].hair_color );
          resPeople.p3.diametro = (list.results[index].skin_color);
          resPeople.p3.poblacion  = (list.results[index].eye_color);
          resPeople.p3.height  = (list.results[index].height);
          resPeople.p3.homeworld  = (list.results[index].homeworld);
          resPeople.p3.species  = (list.results[index].species);
        }else if(index==3){
          resPeople.p4.name = (list.results[index].name);
          resPeople.p4.terreno = (list.results[index].gender);
          resPeople.p4.gravedad = (list.results[index].hair_color );
          resPeople.p4.diametro =(list.results[index].skin_color);
          resPeople.p4.poblacion  = (list.results[index].eye_color);
          resPeople.p4.height  = (list.results[index].height);
          resPeople.p4.homeworld  = (list.results[index].homeworld);
          resPeople.p4.species  = (list.results[index].species);
        }else if(index==4){
          resPeople.p5.name = (list.results[index].name);
          resPeople.p5.terreno = (list.results[index].gender);
          resPeople.p5.gravedad = (list.results[index].hair_color );
          resPeople.p5.diametro = (list.results[index].skin_color);
          resPeople.p5.poblacion  = (list.results[index].eye_color);
          resPeople.p5.height  = (list.results[index].height);
          resPeople.p5.homeworld  = (list.results[index].homeworld);
          resPeople.p5.species  = (list.results[index].species);
        }else if(index==5){
          resPeople.p6.name = (list.results[index].name);
          resPeople.p6.terreno = (list.results[index].gender);
          resPeople.p6.gravedad = (list.results[index].hair_color );
          resPeople.p6.diametro = (list.results[index].skin_color);
          resPeople.p6.poblacion  = (list.results[index].eye_color);
          resPeople.p6.height  = (list.results[index].height);
          resPeople.p6.homeworld  = (list.results[index].homeworld);
          resPeople.p6.species  = (list.results[index].species);
        }
    }
    
    
   
}

module.exports={
    resPeople
};