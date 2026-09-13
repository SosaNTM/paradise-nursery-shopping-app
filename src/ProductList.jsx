import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Numero totale di articoli mostrato nell'icona del carrello
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=1200&q=80',
          description: 'Calming scent, known to reduce stress.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=1200&q=80',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$14',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Boosts memory and concentration.',
          cost: '$15',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=1200&q=80',
          description: 'Thrives in low light and needs little water.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3818192_1280.jpg',
          description: 'Fast growing vine, almost impossible to kill.',
          cost: '$10',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Succulent with healing gel, very easy to care for.',
          cost: '$14',
        },
      ],
    },
  ];

  // Aggiunge il prodotto al carrello e disabilita il pulsante
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Barra di navigazione presente sia nella lista prodotti sia nel carrello */}
      <div className="navbar">
        <div className="navbar-brand">
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>
        <div className="navbar-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a>
          <a href="#" onClick={handlePlantsClick}>Plants</a>
          <a href="#" onClick={handleCartClick} className="cart-link">
            <span className="cart-icon">&#128722;</span>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categorySection, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <h1 className="category-title">{categorySection.category}</h1>
              <div className="product-list">
                {categorySection.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-price">{plant.cost}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;