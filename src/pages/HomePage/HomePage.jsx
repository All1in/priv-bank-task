import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WelcomeMessage = styled.h2`
  color: #333;
`;

const FeaturedProduct = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;

  h3 {
    color: #555;
    margin-bottom: 10px;
  }

  p {
    color: #777;
  }
`;

const HomePage = () => {
    const [featuredProduct, setFeaturedProduct] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/1')
            .then(response => {
                setFeaturedProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching featured product:', error);
            });
    }, []);

    return (
        <HomePageContainer>
            <WelcomeMessage>Welcome to our Store!</WelcomeMessage>
            {featuredProduct && (
                <FeaturedProduct>
                    <h3>Featured Product</h3>
                    <p>{featuredProduct.title}</p>
                    <p>Category: {featuredProduct.category}</p>
                    <p>Price: ${featuredProduct.price}</p>
                </FeaturedProduct>
            )}
        </HomePageContainer>
    );
};

export default HomePage;



