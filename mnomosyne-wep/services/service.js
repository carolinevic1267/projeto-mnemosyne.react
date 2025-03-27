import { useAsyncError } from "react-router-dom";

const API_URL = 'http://localhost:3000/memorias'

export const getMemorias = async () => {
  const response = await fetch(API_URL);
  return response.json();  
}

export const crateMemoria = async (memoria) => {
    const response = await fetch(API_URL, {
        method: 'POST' , 
        headers: {
            'content-Type': 'application/json' ,
        },
        body: JSON.stringify(memoria),
    })
    return response.json();
}