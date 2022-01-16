import {urls} from "../servise_list/urls";

const getPosts = () => {
    return fetch(urls.posts)
        .then(value => value.json());
};

const getPostId = (id) => {
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json())
};

export const postService = {
    getPosts,
    getPostId
}