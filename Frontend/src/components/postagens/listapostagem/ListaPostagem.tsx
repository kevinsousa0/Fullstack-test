import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
    const postagensFixas: Postagem[] = [
        {
            id: 999991,
            titulo: "Introdução ao React com TypeScript",
            texto: "O React é uma das bibliotecas JavaScript mais populares para construção de interfaces de usuário. Quando combinado com TypeScript, oferece uma experiência de desenvolvimento mais robusta e segura. Neste post, vamos explorar como configurar um projeto React com TypeScript e as principais vantagens dessa combinação.",
            tema: { id: 99999, descricao: "Tecnologia (apenas exemplo, crie um novo tema)" }
        },
        {
            id: 999992,
            titulo: "Backend com Node.js: Guia Completo",
            texto: "Node.js revolucionou o desenvolvimento backend permitindo usar JavaScript no servidor. Neste guia, abordaremos desde a configuração inicial até a criação de APIs RESTful robustas. Exploraremos Express.js, middlewares, autenticação e muito mais para criar aplicações escaláveis.",
            tema: { id: 99991, descricao: "Desenvolvimento Web (apenas exemplo, crie um novo tema)" }
        }
    ];

    const [posts, setPosts] = useState<Postagem[]>(postagensFixas)
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        try {
            let todasPostagens = [...postagensFixas];
            
            await busca("/postagens", (dataAPI: Postagem[]) => {
                if (dataAPI && Array.isArray(dataAPI) && dataAPI.length > 0) {
                    todasPostagens = [...postagensFixas, ...dataAPI];
                    const postagensUnicas = todasPostagens.filter((post, index, self) => 
                        index === self.findIndex(p => p.id === post.id)
                    );
                    setPosts(postagensUnicas);
                } else {
                    setPosts(postagensFixas);
                }
            }, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error) {
            console.log('Erro ao buscar postagens da API, usando apenas dados fixos:', error);
            setPosts(postagensFixas);
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="botao" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;