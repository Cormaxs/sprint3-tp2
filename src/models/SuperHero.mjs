import mongoose from 'mongoose';



const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, require: true},
    nombreReal: {type: String, require: true},
    edad: {type:Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    CargadoPor: { type: String, required: true }, //Nuevo campo
    createdAT: {type:Date, default: Date.Now}
}, {collection: 'Grupo-16'});

export default mongoose.model('SuperHero', superheroSchema);