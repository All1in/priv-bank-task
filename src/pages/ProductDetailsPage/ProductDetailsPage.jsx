import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const ProductDetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductDetailsCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

const ProductDetailsContent = styled.div`
  padding: 20px;

  h3 {
    color: #333;
  }

  p {
    color: #777;
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  animation: ${spin} 1s linear infinite;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;


const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    return (
        <ProductDetailsContainer>
            <h2>Product Details Page</h2>
            {product ? (
                <ProductDetailsCard>
                    <ProductImage src={product.image} alt={product.title} />
                    <ProductDetailsContent>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Count: {product.rating.count}</p>
                    </ProductDetailsContent>
                </ProductDetailsCard>
            ) : (
                <LoadingContainer>
                    <SpinnerContainer />
                </LoadingContainer>
            )}
        </ProductDetailsContainer>
    );
};

export default ProductDetailsPage;
