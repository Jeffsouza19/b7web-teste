import * as C from './styled-components/Notepadlist'
import { Option } from './styled-components/Option'
import { Note } from "../types/Note";
import { ChangeEvent, useState } from 'react';

type Props = {
    data: Note,
    onUpdate: (title: string, body: string, id: number) => void,
    onDelete: (id: number) => void
}

export const NoteItem = ({ data, onUpdate, onDelete }: Props) => {
    const [title, setTitle] = useState(data.title);
    const [body, setBody] = useState(data.body);
    const id: number = data.id;

    const addtitlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const addbodychange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }

    const updatenote = () => {
        onUpdate(title, body, id)
    }

    const delnote = () => {
        onDelete(id)
    }

    return (
        <C.Container bgcolor={data.bgcolor}>
            <C.Title><C.Legend onChange={addtitlechange} value={title} /></C.Title>
            <C.Body bgcolor={data.bgcolor} fontcolor={data.fontcolor} onChange={addbodychange} value={body}></C.Body>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <C.Button onClick={updatenote} bgcolor='green' >Salvar</C.Button>
                <C.Button onClick={delnote} bgcolor='red'>Deletar</C.Button>
            </div>
        </C.Container>
    )
}