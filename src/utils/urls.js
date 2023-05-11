export const ROOM = 
    'http://localhost:1337/api/rooms/:id?populate=wife&populate=image&populate=class&populate=order_room'
export const CLASS =
    'http://localhost:1337/api/classes/:id?populate=image&populate=rooms.image'
export const FOOD = 
    'http://localhost:1337/api/foods/?populate=image&populate=category&&filters[category][title]=foodCategory'
export const POOL =
    'http://localhost:1337http:/api/pools/:id?populate=image&populate=order_pool'
export const REVIEWS =
    'http://localhost:1337/api/reviews?populate=*&filters[room][id]=roomId'
export const ORDER = 
    'http://localhost:1337/api/orders/populate=*'
export const CATEGORY =
    'http://localhost:1337/api/categories/:id/populate=foods'