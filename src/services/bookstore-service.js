export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://d1b14unh5d6w7g.cloudfront.net/1491965975.01.S001.LXXXXXXX.jpg?Expires=1668718770&Signature=es0vJ6SqE4KDwOcKDzYSxCxMw4ExJuiVuP8qUP0v~CVY9CQD59OMQFXy638kt6qRvMAQcFY7nrNuV9gqxhtO-DgMBf2L~vD1A5CvtuBBhUQYgGjYQIwFuPEo4s3fXKCWU6HM~hOko7JE2EAQUC4eeOip4QZHocKjdlx3JsH71~0_&Key-Pair-Id=APKAIUO27P366FGALUMQ'
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