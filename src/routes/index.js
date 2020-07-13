const fetch = require('node-fetch');

let url =`https://swapi.dev/api/films`;
let data ={};
let resultTitle=[];
fetch(url).then((res) =>{
    return res.json();
}).then((json)=>{
    result(JSON.stringify(json)); 
});

function result(params) {
    let list = JSON.parse(params);
    for (let index = 0; index < list.results.length; index++) {
         resultTitle.push( list.results[index].title);
    }
}



module.exports={
    resultTitle
};
