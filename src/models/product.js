'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: false,
        trim: true,
        index: true,
        unique: true
    },
    artista: {
        type: String,
        required: true,
    },
    estilo: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }   
    
});


module.exports = mongoose.model('Product', schema);