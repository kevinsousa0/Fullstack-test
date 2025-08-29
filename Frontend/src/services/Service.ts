import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    try {
        const resposta = await api.post(url, dados)
        setDado(resposta.data)
        return { success: true, data: resposta.data };
    } catch (error: any) {
        return { success: false, error: error.response?.data || error.message };
    }
}

export const login = async (url: any, dados: any, setDado: any) => {
    try {
        const resposta = await api.post(url, dados)
        setDado(resposta.data.token)
        return { success: true, data: resposta.data };
    } catch (error: any) {
        return { success: false, error: error.response?.data || error.message };
    }
}

export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async (url: any, dados: any, setDado: any, header: any) => {
    try {
        const resposta = await api.post(url, dados, header)
        setDado(resposta.data)
        return { success: true, data: resposta.data };
    } catch (error: any) {
        return { success: false, error: error.response?.data || error.message };
    }
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    try {
        const resposta = await api.put(url, dados, header)
        setDado(resposta.data)
        return { success: true, data: resposta.data };
    } catch (error: any) {
        return { success: false, error: error.response?.data || error.message };
    }
}

export const deleteId = async (url: any, header: any) => {
    try {
        await api.delete(url, header)
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.response?.data || error.message };
    }
}