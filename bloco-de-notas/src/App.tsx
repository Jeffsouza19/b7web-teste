import { useEffect, useState } from 'react';

import { Note } from './types/Note';

import { NoteForm } from './components/NoteForm'
import { NoteItem } from './components/NoteItem';
import * as N from './AppStyled'

import { api } from './api';


const App = () => {

	const [notes, setNotes] = useState<Note[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		loadNotes()
	}, []);

	const loadNotes = async () => {
		try {
			setLoading(true);
			let json = await api.getAllnotes();
			setLoading(false);
			setNotes(json.notes);
			setError(json.error);
		} catch (error) {
			setLoading(false);
			alert('Ocorreu um erro com a pagina')
		}
	}

	const Addnote = async (title: string, body: string, bgcolor: string, fontcolor: string) => {
		let json = await api.addNewNote(title, body, bgcolor, fontcolor);

		if (json.error) {
			alert(json.error)
		}
		loadNotes();
	}

	const Updatenote = async (title: string, body: string, id: number) => {
		let json = await api.updateNote(title, body, id);
	}

	const Deletenote = async (id: number) => {
		let json = await api.deleteNote(id);

		loadNotes();
	}

	return (
		<div>
			{loading &&
				<div>carregando</div>
			}

			{!loading &&
				<>
					<N.Header>NotePad</N.Header><hr />
					<NoteForm onAdd={Addnote} />
					{!notes &&
						<div>
							<h1>{error}</h1>
						</div>
					}
					{notes &&
						<N.NotesList>
							{notes.map((item, index) => (
								<NoteItem onUpdate={Updatenote} onDelete={Deletenote} data={item} key={index} />
							))}
						</N.NotesList>
					}
				</>
			}
		</div>
	);
}

export default App;
