import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

const App = () => {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  console.log(allCategories);

  console.log(categories);
  //setCategories(allCategories);
  const setcategories = (ele: string) => {
    if (ele == "all") {
      setItems(menu);
      return;
    }
    console.log(ele);
    setItems(menu);
    setItems((items) =>
      items.filter((element, index) => element.category == ele)
    );
  };

  return (
    <>
      <section className="section">
        <div className="menu">
          <Menu category={allCategories} setCategories={setcategories} />
          <Categories items={items} />
        </div>
      </section>
    </>
  );
};

export default App;
