import {urls} from "../servise_list/urls";

const getPosts = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json());
};


export const postService = {
    getPosts
}