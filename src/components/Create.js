import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateBookMutation } from '../services/bookServices'; 

const Create = () =>{
	const [ createBook,data ] = useCreateBookMutation();
	console.log(data);
	const history = useHistory();

    const [state,setState] = useState({
        name:'',
        author:''
    })
    
    const handle = e =>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        await createBook(state)
		history.push('/')
    }

    return (
        <div className='container'>
			<h3 style={{ marginBottom: '15px' }}>Create new book</h3>
			<form onSubmit={handleSubmit} >
				<input
					type='text'
					name='name'
					placeholder='Book name'
					onChange={handle}
					value={state.name}
					required
				/>
				<input
					type='text'
					name='author'
					onChange={handle}
					value={state.author}
					placeholder='Book author'
					required
				/>
				<button type='submit'>create new book</button>
			</form>
		</div>
    )
}

export default Create
