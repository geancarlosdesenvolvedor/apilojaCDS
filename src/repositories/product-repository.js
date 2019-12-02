'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'image titulo artista estilo price');
    return res;
}

exports.getByArtista = async(artista) => {
    const res = await Product
        .findOne({
            artista: artista,
            active: true
        }, 'image titulo artista estilo price');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                titulo: data.titulo,
                artista: data.artista,
                estilo: data.estilo,
                slug: data.slug,
                active: true,
                price: data.price,
                
            }
        });
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}