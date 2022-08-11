import {
  ProductImage,
  ProductButtons,
  ProductCard,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Hola mundo"} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
