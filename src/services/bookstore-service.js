export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://m.media-amazon.com/images/I/41yJ75gpV-L._AC_SY780_.jpg'
        },
        {
            id: 2,
            title: 'Release It',
            author: 'Michael T. Nygard',
            price: 42,
            coverImage: 'https://m.media-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
        },
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                }
                else {
                    resolve(this.data)
                }
                                
            }, 700);
        });
    }
}