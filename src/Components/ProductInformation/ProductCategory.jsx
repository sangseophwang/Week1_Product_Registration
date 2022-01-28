import React from "react";
// import { FormContext } from "FormContextAPI/FormContextAPI";
import { CATEGORY_LIST } from "Utils/Constants/CategoryList";
import CategoryItem from "./CategoryItem";
import SelectedItem from "./SelectedItem";
import "Components/ProductInformation/scss/ProductCategory.scss";

function ProductCategory({ value, onChange }) {
  // const [selected, setSelected] = useState([]);
  // const [inputs, onChange] = useContext(FormContext);

  return (
    <div className="information__category">
      <ul className="information__category__list-area">
        {CATEGORY_LIST.map((category, index) => {
          return (
            <CategoryItem
              category={category}
              index={index}
              selected={value}
              setSelected={onChange}
              key={index}
            />
          );
        })}
      </ul>
      <div className="information__category__select-area">
        <ul className="information__category__select-list-area">
          {value.length > 0 &&
            value.map((item, index) => {
              return (
                <SelectedItem
                  item={item}
                  index={index}
                  selected={value}
                  setSelected={onChange}
                  key={index}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategory;
