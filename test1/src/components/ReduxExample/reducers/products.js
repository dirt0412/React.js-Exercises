export const products = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return [
                ...action.products
            ]
        default:
            return state
    }
}
