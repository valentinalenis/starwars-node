function planetaString(planeta ) {
    var msj= "name: " + this.name + "-terrain: " + this.terrain + "-gravity: " + this.gravity + "-diameter: " + this.diameter+ "-population: " + this.population;
    return msj;
}

function planeta(name, terrain, gravity, diameter, population) {
    this.name = name;
    this.terrain = terrain;
    this.gravity = gravity;
    this.diameter = diameter;
    this.population = population;
}
module.exports={
    planeta, planetaString
}