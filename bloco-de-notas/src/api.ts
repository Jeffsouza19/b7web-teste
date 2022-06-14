import axios from 'axios';

const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {'Content-Type': 'application/json'}
})

export const api = {
    getAllnotes:async () => {
        let response = await http.get('notes');
        return response.data;
    },
    addNewNote: async (title: string, body: string, bgcolor: string, fontcolor: string)=>{
        let response = await http.post('note',{
			title, body, bgcolor, fontcolor
		});
		return response.data;
         
    },
    updateNote: async (title: string, body: string, id: number)=>{
        let response = await http.put(`note/${id}`,{
            title, body
        });
        return response.data;
    },
    deleteNote: async (id: number)=>{
        let response = await http.delete(`note/${id}`);

        return response.data;
    }

}