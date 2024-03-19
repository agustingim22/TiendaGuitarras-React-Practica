import { useMemo } from "react";
import Guitar from "./Guitar";

export default function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}){

    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce( (total, item) => total + (item.quantity * item.price), 0), [cart])

    return(
        <header class="py-5 header">
        <div class="container-xl">
            <div class="row justify-content-center justify-content-md-between">
                <div class="col-8 col-md-3">
                    <a href="index.html">
                        <img class="img-fluid" src="./public/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        class="carrito"
                    >
                        <img class="img-fluid" src="./public/carrito.png" alt="imagen carrito" />

                        <div id="carrito" class="bg-white p-3">
                            {isEmpty ? (
                                <p class="text-center">El carrito esta vacio</p>
                            ) : ( 
                                <>                                                      
                            <table class="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map( guitar => (
                                    <tr key={guitar.id}>
                                        <td>
                                            <img class="img-fluid" src={`./public/${guitar.image}.jpg`} alt="imagen guitarra" />
                                        </td>
                                        <td>{guitar.name}</td>
                                        <td class="fw-bold">
                                                ${guitar.price}
                                        </td>
                                        <td class="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                onClick={() => decreaseQuantity(guitar.id)}
                                            >
                                                -
                                            </button>
                                                {guitar.quantity}
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                onClick={() => increaseQuantity(guitar.id)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-danger"
                                                type="button"
                                                onClick={() => removeFromCart(guitar.id)}
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>   
                            </table>
                            

                            <p class="text-end">Total pagar: <span class="fw-bold">${cartTotal}</span></p>
                            <button class="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                            </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}