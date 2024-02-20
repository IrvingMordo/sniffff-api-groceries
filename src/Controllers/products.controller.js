import { json } from "express";
import productDAO from "../DAO/products.dao.js"; 


export const getAll = (req, res) =>{
    productDAO.getAll()
    .then(products => res.render ('../src/Views/index', {products}))
    .catch(err=> res.json({
        status: "Server unavailable"
    })); 
}


export const getOne = (req, res) =>{
    productDAO.getOne(req.params.barcode)
    .then(product => { !product ? req.json ({
        message: "product not found"
    }): res.render ('../src/Views/edit', {product}) 
})  
    .catch(err=> res.json({
        status: "Server unavailable"
    })); 
}; 

export const insertOne = async (req, res) => {
    productDAO.insertOne(req.body)
    .then(result => res.redirect('/api/products/'))
    .catch(err => res.json({status: "Server unavailable"}))
}


export const updateOne = (req, res) => {
    console.log(req.body)
    productDAO.updateOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message: "Product not found "
            }) : res.redirect('/api/products/');
        })
        .catch(err => res.json({ status: "Server unavailable" }));
};


export const deleteOne = (req, res) => {
    productDAO.deletetOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message: "Product not found "
            }) : res.redirect('/api/products');
        }).catch(err => res.json({ status: "Server unavailable" }));
};




