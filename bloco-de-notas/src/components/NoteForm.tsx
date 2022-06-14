import { ChangeEvent, useState } from "react";
import * as N from './styled-components/Notepadform';
import * as Np from './styled-components/Notepadlist';
import { Option } from './styled-components/Option';
import { Form } from './styled-components/Form';

type Props = {
    onAdd: (title: string, body: string, bgcolor: string, fontcolor: string) => void;
}

export const NoteForm = ({ onAdd }: Props) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [bgcolor, setColor] = useState('GRAY');
    const [fontcolor, setFontColor] = useState('BLACK');
    const bgcolors = [
        { id: 1, name: 'RED' },
        { id: 2, name: 'BLUE' },
        { id: 3, name: 'GREEN' },
        { id: 4, name: 'GRAY' },
    ];
    const fontcolors = [
        { id: 0, name: 'BLACK' },
        { id: 1, name: 'WHITE' },
    ]

    const addtitlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const addbodychange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }

    const addsetcolor = (e: ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value);
    }

    const addsetFontColor = (e: ChangeEvent<HTMLSelectElement>) => {
        setFontColor(e.target.value);
    }

    const addClick = () => {
        onAdd(title, body, bgcolor, fontcolor);
    }

    return (
        <N.Fieldset bgcolor={bgcolor} fontcolor={fontcolor}>
            <Np.Title><Np.Legend onChange={addtitlechange} defaultValue={title} placeholder='Digite um titulo' /></Np.Title>
            <N.TextArea placeholder="Insira uma nova anotação" onChange={addbodychange} defaultValue={body} fontcolor={fontcolor} ></N.TextArea>
            <Form>
                <div>
                    <label>Cor de fundo: </label>
                    <select name="bgcolor" value={bgcolor} onChange={addsetcolor}>
                        {bgcolors.map((item, index) => (
                            <Option key={item.id} value={item.name}>{item.name}</Option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Cor da letra: </label>
                    <select name="fontcolor" value={fontcolor} onChange={addsetFontColor}>
                        {fontcolors.map((item, index) => (
                            <Option key={item.id} value={item.name}>{item.name}</Option>
                        ))}
                    </select>
                </div>
            </Form>
            <button onClick={addClick}>Adicionar</button>
        </N.Fieldset>
    )
}