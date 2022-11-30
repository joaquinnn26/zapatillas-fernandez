import carrito from "../images/cart.png"

export default function CarWidget(){
    console.log(carrito)
return (
    <>
        <img src={carrito} className="carrito" />
        <span className="numero-carro">0</span>
    </>

)
}