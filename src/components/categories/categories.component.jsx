import Category from "../categoryComponents/catergory.component";
import "./categories.styles.scss";

const Categories = ({categories}) => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};
export default Categories;
