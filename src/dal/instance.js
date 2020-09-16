import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY':
        //основной аккаунт
            'ff828688-16d2-4be6-b299-7ba046a4b32d'
        //второй аккаунт для тэста
        // '3f20c7e7-15c3-40fd-9a19-b1423f325934'
    }
})