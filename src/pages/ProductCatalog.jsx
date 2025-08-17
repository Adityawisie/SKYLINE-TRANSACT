// src/pages/ProductCatalog.jsx
import React from 'react';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const categories = [
    'Fruits & Vegetables & Oil',
    'Rice',
    'Spices Seeds',
    'Pulses',
    'Grains',
    'Sweetness Sugar Products'
  ];

  const productsByCategory = {
    'Fruits & Vegetables & Oil': [
      { name: 'Banana', description: 'Fresh, ripe bananas sourced from top farms.' },
      { name: 'Chilli Premium', description: 'High-quality premium chillies for export.' },
      { name: 'Chilly Regular', description: 'Regular chillies for everyday use.' },
      { name: 'Mango', description: 'Juicy mangoes available in multiple varieties.' },
      { name: 'Mango Badami', description: 'Badami variety mangoes, sweet and aromatic.' },
      { name: 'Kesar', description: 'Kesar mangoes, known for their unique flavor.' },
      { name: 'Alphonso', description: 'Premium Alphonso mangoes, rich and creamy.' },
      { name: 'Onion', description: 'Fresh onions, ideal for cooking and salads.' },
      { name: 'Pomegranate', description: 'Red, juicy pomegranates packed with nutrients.' },
      { name: 'Tomato', description: 'Farm-fresh tomatoes for all culinary needs.' },
      { name: 'Turmeric', description: 'Pure turmeric, perfect for spice and health.' },
      { name: 'Watermelon', description: 'Sweet watermelons, perfect for summer.' },
      { name: 'Soyabean Oil', description: 'High-quality soyabean oil for cooking.' },
      { name: 'Soyabean', description: 'Nutritious soyabeans for various uses.' },
      { name: 'Potato', description: 'Fresh potatoes, versatile for many dishes.' },
      { name: 'Groundnut Oil', description: 'Pure groundnut oil, ideal for frying.' },
      { name: 'Groundnut', description: 'Premium groundnuts, great for snacks.' }
    ],
    'Rice': [
      { name: '1121 Sella', description: 'Long-grain 1121 Sella rice, perfect for biryani.' },
      { name: '1121 Sella Golden', description: 'Golden 1121 Sella rice, aromatic and flavorful.' },
      { name: '1121 Steam', description: 'Steamed 1121 rice, soft and fluffy.' },
      { name: '1509 Sella Golden', description: '1509 Sella Golden rice, premium quality.' },
      { name: '1509 Steam', description: 'Steamed 1509 rice, ideal for daily meals.' },
      { name: '17-18 Steam', description: '17-18 Steam rice, excellent texture.' },
      { name: 'Indian Long Green Basmati Rice', description: 'Authentic Indian long green basmati rice.' }
    ],
    'Spices Seeds': [
      { name: 'Black Mustard', description: 'Black mustard seeds, pungent and flavorful.' },
      { name: 'Coriander Seeds', description: 'Whole coriander seeds, aromatic and fresh.' },
      { name: 'Cumin (Jeera) Seeds', description: 'Cumin seeds, essential for Indian cuisine.' },
      { name: 'Fennel Seeds', description: 'Sweet fennel seeds, great for digestion.' },
      { name: 'Sesame Seeds', description: 'Nutty sesame seeds, perfect for baking.' },
      { name: 'Turmeric Finger', description: 'Whole turmeric fingers, pure and natural.' },
      { name: 'Red Chilli', description: 'Spicy red chillies, sun-dried for flavor.' }
    ],
    'Pulses': [
      { name: 'Black Gram', description: 'Protein-rich black gram for dal and curries.' },
      { name: 'Desi Chickpeas', description: 'Desi chickpeas, perfect for chana masala.' },
      { name: 'Kabuli Chickpeas', description: 'Kabuli chickpeas, large and creamy.' },
      { name: 'Green Gram', description: 'Green gram, nutritious and versatile.' },
      { name: 'Pigeon Pea (Toor Dal)', description: 'Toor dal, staple for Indian households.' },
      { name: 'Red Kidney Beans (Rajma)', description: 'Rajma, classic for North Indian cuisine.' },
      { name: 'Split Chickpeas (Chana Dal)', description: 'Chana dal, split chickpeas for dal.' },
      { name: 'Soybean', description: 'Soybeans, high in protein and fiber.' }
    ],
    'Grains': [
      { name: 'Bajara', description: 'Bajara millet, healthy and gluten-free.' },
      { name: 'Corn/Maize', description: 'Fresh corn/maize, sweet and crunchy.' },
      { name: 'Rye', description: 'Rye grains, ideal for bread and baking.' },
      { name: 'Wheat Grains', description: 'Premium wheat grains for flour.' },
      { name: 'Sorghum/Jawari', description: 'Sorghum/jawari, nutritious millet.' }
    ],
    'Sweetness Sugar Products': [
      { name: 'Jaggery', description: 'Natural jaggery, unrefined and sweet.' },
      { name: 'Jaggery Cubes', description: 'Jaggery cubes, easy to use.' },
      { name: 'Jaggery Powder', description: 'Jaggery powder, perfect for desserts.' },
      { name: 'White Refined Sugar (ICUMSA 45)', description: 'High-grade white refined sugar.' },
      { name: 'White Refined Sugar (ICUMSA 100)', description: 'Refined sugar, ICUMSA 100.' },
      { name: 'Unrefined Sugar (ICUMSA 600-1200)', description: 'Unrefined sugar, ICUMSA 600-1200.' },
      { name: 'Unrefined Sugar (S30)', description: 'Unrefined sugar, S30 grade.' },
      { name: 'Organic Brown Sugar (Raw Brown Sugar)', description: 'Organic raw brown sugar.' },
      { name: 'Sugar Cube', description: 'Sugar cubes, convenient for tea.' }
    ]
  };

  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  return (
    <div className="product-catalog" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 8px' }}>
      <section className="catalog-content" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', padding: '0 4px' }}>
          <div className="filter-section" style={{ width: '100%', textAlign: 'left', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '16px', color: '#222', borderBottom: '2px solid #eee', paddingBottom: '8px', letterSpacing: '1px' }}>Categories</h3>
            <ul className="category-filters" style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '32px', margin: 0 }}>
              {categories.map(cat => (
                <li
                  key={cat}
                  className={cat === selectedCategory ? 'active' : ''}
                  style={{ fontWeight: cat === selectedCategory ? 'bold' : 'normal', cursor: 'pointer' }}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%' }}>
            {productsByCategory[selectedCategory].map((product) => (
              <div className="product-card" key={product.name} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '160px', textAlign: 'center' }}>
                <div className="product-image" style={{ width: '100%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', background: '#f5f5f5', borderRadius: '8px' }}>
                  <div className="placeholder-image" style={{ color: '#111', fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>{product.name}</div>
                </div>
                <div className="product-details" style={{ textAlign: 'center', width: '100%' }}>
                  <p style={{ color: '#333', fontSize: '0.98rem', marginBottom: '12px', textAlign: 'center' }}>{product.description}</p>
                  <button className="btn btn-dark" style={{ marginTop: 'auto', padding: '8px 24px', borderRadius: '8px' }}>Buy</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="inquiry-section" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', margin: '0 auto' }}>
          <h2>Looking for a specific product?</h2>
          <p>Contact our team for custom orders and bulk inquiries</p>
          <button className="btn btn-dark" style={{ marginTop: '16px', padding: '8px 24px', borderRadius: '8px' }} onClick={() => window.location.href = '/contact'}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default ProductCatalog;