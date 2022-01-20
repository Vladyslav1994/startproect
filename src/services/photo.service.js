import {urls} from '../configs/urls';
import {axiosService} from "./axios.service";

export const photoService = {
    getByPhoto: () => axiosService.get(urls.albums).then(value => value.data),
    getByIdPhoto: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}