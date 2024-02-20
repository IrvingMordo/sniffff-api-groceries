import { Schema, model } from "mongoose";

const productSchema = new Schema({
    barcode: {
        type: String, 
        unique: true, 
        required: true 
    }, 
        description: String, 
        brand: String, 
        price: Number, 
        cost: Number,
        stock: Number,  
        expiredDate: String, 
        status: Number
},
    {
        versionKey: false, 
        timestamps: true
    }
); 

export default model('product', productSchema); 



{
    nombre: String
    status: Boolean
    tipo: String 
    dato_registrado: Number 
    unidad_medida: String
    fecha_registro: Date  
    fecha_ultima_act: Date  
}  

{
    nombre: "Sensor Temperatura"
    status: 1
    tipo: "DHT11" 
    dato_registrado: 45 
    unidad_medida: "°C"
    fecha_registro: 12-12-2024  
    fecha_ultima_act: 12-12-2024 
}


{
    nombre: "Sensor Húmedad"
    status: 1
    tipo: "DHT11" 
    dato_registrado: 70
    unidad_medida: "%"
    fecha_registro: 12-12-2024  
    fecha_ultima_act: 12-12-2024 
}


{
    nombre_actuador: "Micro servo"
    status: 1
    tipo: "SG90" 
    dato_registrado: 90
    unidad_medida: "°"
    fecha_registro: 12-12-2024  
    fecha_ultima_act: 12-12-2024 
}