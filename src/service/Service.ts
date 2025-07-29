import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-pkbe.onrender.com/swagger'
})

export const consultar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}