import {urls} from '../configs/urls';
import {axiosService} from "./axios.service";

export const photoService = {
    getByPhoto: () => axiosService.get(urls.albums).then(value => value.data),
    getByIdPhoto: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}