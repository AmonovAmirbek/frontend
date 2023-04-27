export const ROOM = 
    'http://localhost:1337/api/rooms/:id?populate=wife&populate=image&populate=class&populate=order_room'
export const CLASS =
    'http://localhost:1337/api/classes/:id?populate=rooms.image&populate=image'
export const FOOD = 
    'http://localhost:1337/api/foods/:id?populate=image'
export const POOL =
    'http://localhost:1337http:/api/pools/:id?populate=image&populate=order_pool'
export const REVIEWS =
    'http://localhost:1337http:/api/reviews/:id?populate=customer&populate=room&populate=rating'