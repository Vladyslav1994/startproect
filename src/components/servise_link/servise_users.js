import {urls} from "../servise_list/urls";



const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getById = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}

const getPosts = () => {
    return fetch(urls.posts)
        .then(value => value.json());
};

const getPostId = (id) => {
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json())
};

export const userService = {
    getAll,
    getById,
    getPosts,
    getPostId
}