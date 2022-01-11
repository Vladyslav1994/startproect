import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const postService = {
    getAllPost: () => axiosService.get(urls.posts).then(value => value.data),
    getByIdPosts:(id)=>axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}