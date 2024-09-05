import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            {product.title} | {product.category} | ${product.price}
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductList;
