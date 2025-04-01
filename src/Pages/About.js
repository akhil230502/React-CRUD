import { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function About() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((response) => {
                setData(response.data)

            })
            .catch((err) => console.log("error", err)
            )
    }, [])

    return (<div>
        <Header />
        <h1>Products</h1>
        {
            data.length > 0 ? (
                <div className="container">
                    <div className="row">
                        {
                            data.map((product) =>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                                    <div className="card" style={{ width: "300px", height: "300px" }}>
                                        <img className="card-img-top" src={product.image} style={{ width: "80px", height: "100px", marginLeft: "100px" }} />
                                        <div className="card-body">
                                            <p className="card-title" style={{fontWeight: "bold",fontSize:'15px'}}>{product.title}</p>
                                            <p className="card-text">RS.{product.price}</p>
                                            <button type="button" className="btn btn-success" onClick={() => navigate(`/products/${product.id}`)}>View</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            ) :
                (
                    <p></p>
                )
        }
    </div>
    );

}

export default About;