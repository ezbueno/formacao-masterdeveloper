import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { AUTH_ENDPOINT, CREDENTIALS_NAME } from '../constants';

export const AuthContext = createContext();

export const useAuth = () => {
    const [credentials, setCredentials] = useState({userName: null, displayName: null, token: null});
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        loadCredentials();
    }, []);

    const login = async (username, password) => {
        const loginInfo = {username: username, password: password};
        setProcessing(true);
        
        try {
            const response = await axios.post(`${AUTH_ENDPOINT}/login`, loginInfo); 
            const token = response.headers['authorization'].replace("Bearer ", "");
            storeCredentials(token);
            setProcessing(false);
        } catch(error) {
            console.error(error);
            setError("O login não pode ser realizado!");
            setProcessing(false);
        }
    }

    const logout = () => {
       sessionStorage.removeItem(CREDENTIALS_NAME);
       setCredentials({userName: null, displayName: null, token: null});
       // Adicionei para realizar este teste:
       // Quando erramos o usuário e/ou senha na tela de login, aparece a mensagem com o erro na tela, até aí tudo bem.
       // Porém, quando realizamos o login correto e depois realizamos o logout, a mensagem do erro permanece na tela.
       setError(null);
    }

    const storeCredentials = (token) => {
        const tokenData = JSON.parse(atob(token.split(".")[1]));
        const credentials = {userName: tokenData.sub, displayName: tokenData.displayName, token: token};
        sessionStorage.setItem(CREDENTIALS_NAME, JSON.stringify(credentials));
        setCredentials(credentials);
    }

    const loadCredentials = () => {
        const storedCredentials = sessionStorage.getItem(CREDENTIALS_NAME);

        if (storedCredentials !== null) {
            setCredentials(JSON.parse(storedCredentials));
        }
    }

    const isAuthenticated = () => {
       return sessionStorage.getItem(CREDENTIALS_NAME) !== null;
    }

    return {login, logout, isAuthenticated, credentials, error, processing};
}