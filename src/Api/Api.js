import api from './BaseUrl';

class DataApi {


    async login(username, password) {
        try {
            const response = await api.post('/auth/v1/login', {
                userName: username,
                password: password,
                usertoken: ""
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async getData() {
        try {
            const response = await api.get('/dorm/v1/getData');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async sendData(name, adres, phone, since, capacity, map, universities, images) {
        try {
            
            const response = await api.post('/dorm/v1/addData', {
            dorm_name : name,
            address: adres,
            capacity: capacity,
            map: map,
            since: since,
            phone: phone,
            universities: universities,
            photos_url: images
            
            }
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new DataApi();