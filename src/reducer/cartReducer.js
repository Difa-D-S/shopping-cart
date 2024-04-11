export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "ADD":
            return {...state, cartList: payload.products}
        case "REMOVE":
            return {...state, cartList: payload.products}
        case "UPDATE":
            return {...state, total: payload.total}
        default:
            throw new Error("No case Found in cartReducer")
    }
}
