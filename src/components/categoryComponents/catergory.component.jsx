import "./category.styles.scss";

const Category = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="categoryContainer">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="categoryBodyContainer">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
