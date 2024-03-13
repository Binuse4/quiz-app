import axios from 'axios'

export const BASE_URL = 'http://localhost:5007/';

export const ENDPOINTS = {
    participant: 'participant',
    question:'question',
    getAnswers : 'question/getanswers'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}



//using fetch
// export const createAPIEndpoint = endpoint => {
//     let url = BASE_URL + 'api/' + endpoint + '/';

//     const headers = {
//         'Content-Type': 'application/json'
//     };

//     return {
//         fetch: () => fetch(url, { method: 'GET' }),
//         fetchById: id => fetch(url + id, { method: 'GET' }),
//         post: newRecord => fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(newRecord) }),
//         put: (id, updatedRecord) => fetch(url + id, { method: 'PUT', headers: headers, body: JSON.stringify(updatedRecord) }),
//         delete: id => fetch(url + id, { method: 'DELETE' }),
//     }
// }