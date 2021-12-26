import React from 'react'

export default function product(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img 
                  className="meduim" 
                  src={product.image} 
                  alt={product.name}
                  />
                  </a>
                <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                    </a>
                    <div className="price">
                        {product.price}DT
                    </div>       
                </div>
              </div>
    )
}
