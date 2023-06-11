import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, type, category, image, rest ,set ,reps } = curElem;

          return (
            <>
              <div className="card-container m-2 p-2" key={id}>
                <div className="card p-2">
                  <div className="card-body">
                    <span className="card-author subtle"> {category} ({type})</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description">
                      {set} <br />
                      {reps} <br />
                      {rest}

                    </span>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;