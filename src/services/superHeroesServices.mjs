import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';
import superHeroeRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroeRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroeRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroeRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30() {
    return await superHeroeRepository.obtenerMayoresDe30();
}


export async function actualizarHeroe(id) {
    return await superHeroeRepository.actualizarHeroe(id, { ultimaActualizacion: new Date() });
}


export async function eliminarHeroePorId(id) {
    return await SuperHeroRepository.eliminarHeroePorId(id)
}


export async function eliminarPorNombre(nombre) {
    return await superHeroeRepository.eliminarPorNombre(nombre);
}