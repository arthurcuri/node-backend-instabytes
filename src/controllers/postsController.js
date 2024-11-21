import { getAllPosts, createPost } from "../models/postsModel.js";
import fs from "fs";

export async function listPosts(req, res){
    const posts =  await getAllPosts();
    res.status(200).json(posts);
}

export async function postNewPost(req, res){
    const newPost = req.body;
    try{
        const post = await createPost(newPost);
        res.status(200).json(post);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"});
    }
}

export async function uploadImg(req, res){
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await createPost(newPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}