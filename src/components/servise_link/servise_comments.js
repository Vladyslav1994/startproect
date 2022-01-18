import {urls} from "../servise_list/urls";

const getComments = (id) => {
    return fetch(`${urls.posts}/${id}/comments`)
        .then(value => value.json())
};

export const serviceComments = {
    getComments
}