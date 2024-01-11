import { fetchData } from "./actionType";
import axios from 'axios';


export const dataFetching = () => (dispatch) => {

    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => { console.log(res.data), dispatch(fetchDataFunction(res.data)) })
        .catch((err) => console.log(err))


}


export const fetchDataFunction = (payload) => {

    return { type: fetchData, payload }

}