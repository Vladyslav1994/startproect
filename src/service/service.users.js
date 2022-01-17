import {urls} from "./service.list/urls";

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

export const userService = {
    getAll,
}