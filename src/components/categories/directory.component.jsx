import Category from "../categoryComponents/catergory.component";
import "./directory.styles.scss";

const Directory = ({categories}) => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};
export default Directory;
