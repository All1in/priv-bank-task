import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import usePagination from '../../hooks/usePagination.js';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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

const ProductPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin: 10px;
    font-size: 1.2em;
    color: #333;
  }

  p {
    margin: 0 10px 10px;
    color: #777;
  }
`;

const ProductImageContainer = styled.div`
  height: 150px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;

  &.active {
    background-color: #2980b9;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products?_page=${currentPage}&_limit=5`);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products?q=${searchTerm}&_limit=5`);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error('Error fetching filtered products:', error);
            }
        };

        fetchFilteredProducts();
    }, [searchTerm]);

    const { currentItems, paginate, currentPage } = usePagination(filteredProducts, 5);

    if (loading) {
        return (
            <LoadingContainer>
                <SpinnerContainer />
            </LoadingContainer>
        );
    }

    return (
        <ProductPageContainer>
            <h2>Product Page</h2>
            <SearchInput
                type="text"
                placeholder="Фільтрувати за назвою"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ProductList>
                {currentItems.map(product => (
                    <ProductItem key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <ProductImageContainer>
                                <ProductImage src={product.image} alt={product.title} />
                            </ProductImageContainer>
                            <h3>{product.title}</h3>
                        </Link>
                        <p>Price: ${product.price}</p>
                    </ProductItem>
                ))}
            </ProductList>
            <PaginationContainer>
                {Array.from({ length: Math.ceil(filteredProducts.length / 5) }).map((_, index) => (
                    <PaginationButton
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </PaginationButton>
                ))}
            </PaginationContainer>
        </ProductPageContainer>
    );
};

export default ProductPage;
