import React from 'react';


function CardDoubles({ double }) {
    return (

    <div className="card h-100">
      <div className="row g-0 align-items-center justify-content-center border border-primary ">
        
        <div className="col-4">
          <img
            src={double.avatar}
            alt={double.player}
            className="img-fluid rounded-start"
          />
        </div>

        
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title mb-1">{double.player}</h5>
            <img
              src={double.flag}
              alt={double.flag}
              width="32 px"
              className="mb-2"
            />
            <p className="card-text mb-0">Ranking: {double.rank}</p>
            <p className="card-text mb-0">Puntos: {double.points}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

    

export default CardDoubles;