import { getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

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

export async function updateNewPost(req, res){
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`;
    try{
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const postObj = {
            imgUrl: urlImg,
            descricao: descricao,
            alt: req.body.alt
        }

        const post = await updatePost(id, postObj);
        
        res.status(200).json(post);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"});
    }
}