import React from "react";

type itemProp = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};
type itemsProps = {
  items: itemProp[];
};

const Categories = ({ items }: itemsProps) => {
  console.log(items);
  return (
    <div className="section-center">
      {items.map((item: itemProp) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <>
            <article className="menu-item">
              <img className="photo" src={img} />

              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${Math.round(price)}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          </>
        );
      })}
    </div>
  );
};
export default Categories;
