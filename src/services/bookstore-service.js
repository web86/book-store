export default class BookstoreService {
    data = [
        {id:1, title:'Роман Война и Мир', author:'Лев Толстой',price: 1000, coverImage:'https://cdn.shopify.com/s/files/1/0268/6966/1879/products/The-Official-SCRABBLE-Players-Dictionary-Sixth-Edition-cover_1024x1024.jpg?v=1604685632'},
        {id:2, title:'Преступление и наказание', author:'Достоевский', price: 200, coverImage: 'https://cdn.shopify.com/s/files/1/0268/6966/1879/products/Merriam-Webster_s-Intermediate-Visual-Dictionary-cover_1024x1024.jpg?v=1604082944'},
        {id:3, title:'Путешествие из Питербурга в Москву', author:'Лев Толстой',price: 1000, coverImage:'https://cdn.shopify.com/s/files/1/0268/6966/1879/products/The-Official-SCRABBLE-Players-Dictionary-Sixth-Edition-cover_1024x1024.jpg?v=1604685632'},
        {id:4, title:'ЧУБ', author:'Достоевский', price: 200, coverImage: 'https://cdn.shopify.com/s/files/1/0268/6966/1879/products/Merriam-Webster_s-Intermediate-Visual-Dictionary-cover_1024x1024.jpg?v=1604082944'},
    ]

    getBooks() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (Math.random() > 0.75) {
                    reject(new Error('Ошибка'));
                } else {
                    resolve(this.data);
                }
            },1000)
        });
    }
}