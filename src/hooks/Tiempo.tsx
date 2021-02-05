
import axios from 'axios';

 export async function get<T>(
    path: string
): Promise<T> {
    const { data } = await axios.get(path);
    console.log(data)
    return data;
};

export async function post<T,W>(
    path: string,
    mensaje: String
): Promise<T> {
    const { data } = await axios.post(path,mensaje);
    console.log(data)
    return data;
};
