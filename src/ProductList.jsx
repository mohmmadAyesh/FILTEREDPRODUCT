const ProductList = ({ products, activeFilter, onFilterChange,categories }) => {
  
    return (
      <div>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => onFilterChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-name">{product.name}</div>
              <div className="product-category">{product.category}</div>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;