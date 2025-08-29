import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroPost() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    
    const temasFixos: Tema[] = [
        { id: 999991, descricao: "Tecnologia (apenas exemplo, crie um novo tema)" },
        { id: 999992, descricao: "Desenvolvimento Web (apenas exemplo, crie um novo tema)" },
        { id: 999993, descricao: "React e TypeScript (apenas exemplo, crie um novo tema)" },
        { id: 999994, descricao: "Node.js e Backend (apenas exemplo, crie um novo tema)" },
        { id: 999995, descricao: "Banco de Dados (apenas exemplo, crie um novo tema)" },
        { id: 999996, descricao: "Inteligência Artificial (apenas exemplo, crie um novo tema)" },
        { id: 999997, descricao: "DevOps e Cloud (apenas exemplo, crie um novo tema)" },
        { id: 999998, descricao: "Mobile Development (apenas exemplo, crie um novo tema)" }
    ];

    const [temas, setTemas] = useState<Tema[]>(temasFixos)
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        try {
            let todosTemas = [...temasFixos];
            
            await busca("/temas", (dataAPI: Tema[]) => {
                if (dataAPI && Array.isArray(dataAPI) && dataAPI.length > 0) {
                    todosTemas = [...temasFixos, ...dataAPI];
                    const temasUnicos = todosTemas.filter((tema, index, self) => 
                        index === self.findIndex(t => t.id === tema.id)
                    );
                    setTemas(temasUnicos);
                } else {
                    setTemas(temasFixos);
                }
            }, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error) {
            console.log('Erro ao buscar temas da API, usando apenas dados fixos:', error);
            setTemas(temasFixos);
        }
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        let result;
        if (id !== undefined) {
            result = await put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            });
            if (result.success) {
                toast.success('Postagem atualizada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                back();
            } else {
                let errorMsg = '';
                if (result.error && typeof result.error === 'object') {
                    errorMsg = Object.entries(result.error).map(([key, value]) => `${key}: ${value}`).join(' | ');
                } else {
                    errorMsg = result.error;
                }
                toast.error(errorMsg, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        } else {
            result = await post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            });
            if (result.success) {
                toast.success('Postagem cadastrada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                back();
            } else {
                let errorMsg = '';
                if (result.error && typeof result.error === 'object') {
                    errorMsg = Object.entries(result.error).map(([key, value]) => `${key}: ${value}`).join(' | ');
                } else {
                    errorMsg = result.error;
                }
                toast.error(errorMsg, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        }
    }

    function back() {
        history.push('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" className='botao' variant="contained" >
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;