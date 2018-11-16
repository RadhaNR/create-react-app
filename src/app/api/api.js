import axios from 'axios';

export const getData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://reqres.in/api/users').then(function (response) {
            resolve(response)
        }).catch(function (error) {
            reject(error)
        });
    });
}