import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { getSingles } from '../service/api.js';
import { Link } from 'react-router-dom';
import CardSingles from "../components/CardSingles.jsx";

import { useEffect, useState } from 'react';



function ListSingles() {
    const [singles, setSingles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSingles()
            .then((data) => {
                setSingles(data.singles);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando singles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <div className="d-flex justify-content-center pt-3">
                <Link to="/doubles" className="btn btn-info fw-bold">
                    Ver dobles
                </Link>
            </div>

            <div className="row pt-3 justify-content-center ">
                {singles.map((single) => (
                    <Link
                        key={single.id}
                        to={`/single/${single.id}`}
                        state={{ single }}
                        className="col-md-4 mb-3 text-decoration-none"
                    >
                        <CardSingles single={single} />
                    </Link>

                ))}
            </div>



        </div>

    );



}
export default ListSingles;