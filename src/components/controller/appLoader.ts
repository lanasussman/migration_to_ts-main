import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2c3d852794dc4333bd2bd55de51bc702', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
