import React from 'react';


function CardSingles({ single }) {
    return (

    <div className="card h-100">
      <div className="row g-0 align-items-center justify-content-center border border-primary">
        
        <div className="col-4">
          <img
            src={single.avatar}
            alt={single.player}
            className="img-fluid rounded-start"
          />
        </div>

        
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title mb-1">{single.player}</h5>
            <img
              src={single.flag}
              alt={single.flag}
              width="32 px"
              className="mb-2"
            />
            <p className="card-text mb-0">Ranking: {single.rank}</p>
            <p className="card-text mb-0">Puntos: {single.points}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

    

export default CardSingles;