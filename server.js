import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Gatinho",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem montanhosa",
        imagem: "https://source.unsplash.com/random/300x200/?mountain"
    },
    {
        id: 3,
        descricao: "Cachorro brincando",
        imagem: "https://source.unsplash.com/random/300x200/?dog"
    },
    {
        id:4,
        descricao: "Pratos deliciosos",
        imagem: "https://source.unsplash.com/random/300x200/?food"
    },
    {
        id:5,
        descricao: "Cidade à noite",
        imagem: "https://source.unsplash.com/random/300x200/?city,night"
    },
    {
        id:6,
        descricao: "Natureza exuberante",
        imagem: "https://source.unsplash.com/random/300x200/?nature"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function getPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = getPostById(req.params.id);
    res.status(200).json(posts[index]);
});