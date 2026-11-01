import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { getDoubles } from '../service/api.js';
import { Link } from 'react-router-dom';
import CardDoubles from "../components/CardDoubles.jsx";

import { useEffect, useState } from 'react';



function ListDoubles() {

    const [doubles, setDoubles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDoubles()
            .then((data) => {
                setDoubles(data.doubles);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando doubles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <div className="d-flex justify-content-center pt-3">
                <Link to="/" className="btn btn-info fw-bold">
                    Ver Singles
                </Link>
            </div>

            <div className="row pt-3 justify-content-center ">
                {doubles.map((double) => (
                    <Link
                        key={double.id}
                        to={`/double/${double.id}`}
                        state={{ double }}
                        className="col-md-4 mb-3 text-decoration-none"
                    >
                        <CardDoubles double={double} />
                    </Link>

                ))}
            </div>



        </div>

    );
}
export default ListDoubles;