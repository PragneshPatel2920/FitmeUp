import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container m-2 p-2" key={id}>
                <div className="card p-2">
                  <div className="card-body">
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
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