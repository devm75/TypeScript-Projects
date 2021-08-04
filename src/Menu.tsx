import React from "react";
import "./index.css";

type Props = {
  category: string[];
  setCategories: React.Dispatch<React.SetStateAction<any>>;
  element?: string | any;
};

const Menu = ({ category, setCategories }: Props) => {
  console.log(category);
  return (
    <>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {category.map((element, index) => (
          <button
            key={index}
            className="menu-button"
            onClick={(e) => setCategories(element)}
          >
            {element}
          </button>
        ))}
      </div>
    </>
  );
};

export default Menu;
