
const uuidv1 = require('uuid/v4');
let initialState=[{
    id:uuidv1(),
    name:'IPhone6',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description:'Siêu đẹp',
    price:5000,
    inventory:10,
    rating:4
},
{
    id:uuidv1(),
    name:'IPhone 8',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description:'sản phầm siêu pro',
    price:50000,
    inventory:10,
    rating:3
},
{
    id:uuidv1(),
    name:'DEll 558',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description:'sản phầm siêu pro',
    price:90000,
    inventory:10,
    rating:5
}
]
const pproduct=(state=initialState,action)=>{
    switch(action.type)
    {
        default:
        return [...state];
    }
}
export default pproduct;