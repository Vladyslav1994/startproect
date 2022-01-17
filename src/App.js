import './App.css';

import Users from "./components/users/Users";
import Form from './components/form/Form'
import {useEffect, useState} from "react";
import {userService} from "./service/service.users";

function App() {
    const [users, setUsers] = useState([])
    const [filtr, setFiltr] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(value => {
                setUsers([...value])
                setFiltr([...value])
            })
    },[]);

    const getFilter = (data) => {
        let filtredArr = [...users]

        if (data.name) {
            filtredArr = filtredArr.filter(user=>user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filtredArr = filtredArr.filter(user=>user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filtredArr = filtredArr.filter(user=>user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFiltr(filtredArr)
    };

  return (
    <div>
        <Form getFilter={getFilter}/>,
        <Users users={filtr}/>
    </div>
  );
}

export default App;
