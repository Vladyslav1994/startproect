import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name:'', username:'', email: ''})

    const formHandler = (e) => {
        const eventDate = {...form, [e.target.name]:e.target.value}
        setForm({...form, ...eventDate})
        getFilter(eventDate)
    };

    return (
        <div>
            <label><input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
            <label><input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
            <label><input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
        </div>
    );
};

export default Form;