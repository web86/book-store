const updateOrder = (state, bookId, quantity) => {
    const {bookList:{books}, shoppingCart:{cartItems}} = state;
    const book = books.find((book) => bookId === book.id ); // нашли обьект этой книги из БД
    const bookIndex = cartItems.findIndex((book) => book.id === bookId ); // Если книга уже в корзине то узнаем индекс
    const item = cartItems[bookIndex]; // получим обьект этой книги, если ее нет, то item будет просто undefind
    const newCart = updateCartItems(cartItems,updateCartItem(book, item, quantity),bookIndex);
    return {
        ...state.shoppingCart,
        cartItems: newCart,

    };
};
const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ];
    }
};
const updateCartItem = (book, item = {}, quantity) => { // чтобы не было ошибок, если item нету, то присваиваем ему пустой обьект
    const {id = book.id, title = book.title, count = 0, total = 0} = item; // обьединяем два действия в одно, если item нет, то присваиваем наальные значения
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    };
}

const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems:[],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'DELETE_ALL_BOOKS_FROM_CART':
            const quantity = state.shoppingCart.cartItems.find((book)=> book.id === action.payload).count;
            return updateOrder(state, action.payload, -quantity);
        case 'DECREASE_BOOK_IN_CART':
            return updateOrder(state, action.payload, -1);
        case 'CHANGE_TOTAL_ORDER_IN_CART':
            return {
                ...state.shoppingCart,
                orderTotal: action.payload
            };
        default:
            return state.shoppingCart
    }
};
export default updateShoppingCart
