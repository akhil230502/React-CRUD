import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function Productsview() {

    const [product, setProduct] = useState([{}]);
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            console.error("Error: Product ID is missing.");
            return;
        }
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)

            })
            .catch((err) => console.log("error", err)
            )
    }, [id])

    return (<div>
        <Header />
        <div className="container">
            <div className="card">
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} style={{ width: "150px" }} />
            <p>{product.description}</p>
            <h5>Price: RS.{product.price}</h5>
            <button type="button" class="btn btn-secondary" style={{width:"100px" ,marginLeft:"100px"}} >Buy</button>
            </div>
        </div>
    </div>
    );

}

export default Productsview;