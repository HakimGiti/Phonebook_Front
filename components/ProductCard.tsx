const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p><strong>${product.price}</strong></p>
  </div>
);

export default ProductCard;
