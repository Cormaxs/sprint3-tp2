export function renderizarSuperheroe(superheroe){
    return{
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos,
        "Cargado Por": superheroe.cargadoPor 
    }
}

export function renderizarListaSuperHeroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}