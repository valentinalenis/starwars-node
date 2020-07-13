const http = require("http");
const { listenerCount } = require("process");
let routes = require("./routes/index");
let people = require("./routes/people");
let planets = require("./routes/planets");
let nave = require("./routes/starships");

http.createServer((request, response)=>{
  const { url } = request;
  if(url ==="/"){

    response.write("Hello, world!");
  
  }else if(url ==="/nombrePelicula"){

    response.write(JSON.stringify(routes));

  }else if(url ==="/actores"){

    response.write(JSON.stringify(people));

  }else if(url ==="/planetas"){

    response.write(JSON.stringify(planets));

  }else if(url ==="/naveGrande"){

    response.write(JSON.stringify(nave));
  }
  response.end();
}).listen(3000);
