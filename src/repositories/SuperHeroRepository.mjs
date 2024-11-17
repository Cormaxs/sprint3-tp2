import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository{
    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }
    async obtenerTodos(){
        return await SuperHero.find({});
    }
    async buscarPorAtributo(atributo, valor){
        const query = {[atributo]: new RegExp(valor, 'i')};
        return await SuperHero.find(query);
    }
    async obtenerMayoresDe30() {
        return await SuperHero.find({
            edad: { $gt: 30 },
            planetaOrigen: 'Tierra',
            poderes: { $exists: true, $not: { $size: 0 } } 
        });
    }


    async actualizarHeroe(id, datosActualizados) {
        return await SuperHero.findOneAndUpdate(
            { _id: id }, // Criterio de búsqueda
            datosActualizados, // Cambios a realizar
            { new: true } // Retornar el documento actualizado
        );
    }
    
    async eliminarHeroePorId(id){
        return await SuperHero.findByIdAndDelete(id);
    }

    async eliminarPorNombre(nombre){
        return await SuperHero.findOneAndDelete({nombreSuperHeroe: nombre});
    }

}

export default new SuperHeroRepository();