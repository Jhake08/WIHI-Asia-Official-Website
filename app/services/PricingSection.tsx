'use client';

import { useState } from 'react';

const platformData = [
  {
    name: 'Facebook Shop',
    images: [
      '/images/facebook1.jpg',
      '/images/facebook2.jpg',
      '/images/facebook3.jpg',
      '/images/facebook4.jpg',
      '/images/facebook5.jpg',
      '/images/facebook6.jpg',
      '/images/facebook7.jpg',
    ],
    description: 'Discover beauty essentials for both men and women—glow up starts here!',
    buttonLabel: 'Shop Now',
    shopUrl: 'https://www.facebook.com/CosmiBeautiiMain',
  },
  {
    name: 'TikTok Shop',
    images: [
      '/images/tiktok1.jpg',
      '/images/tiktok2.jpg',
      '/images/tiktok3.jpg',
      '/images/tiktok4.jpg',
      '/images/tiktok5.jpg',
      '/images/tiktok6.jpg',
      '/images/tiktok7.jpg',
    ],
    description: 'Specially curated beauty products for men—style meets skincare.',
    buttonLabel: 'Shop Now',
    shopUrl: 'https://www.tiktok.com/@cosmibeautiiofficial',
  },
  {
    name: 'Lazada Shop',
    images: [
      '/images/lazada1.jpg',
      '/images/lazada2.jpg',
      '/images/lazada3.jpg',
      '/images/lazada4.jpg',
      '/images/lazada5.jpg',
      '/images/lazada6.jpg',
      '/images/lazada7.jpg',
    ],
    description: 'Wide range of products for every need—shop all categories with ease.',
    buttonLabel: 'Shop Now',
    shopUrl: 'https://www.lazada.com',
  },
  {
    name: 'Shopee Shop',
    images: [
      '/images/shopee1.jpg',
      '/images/shopee2.jpg',
      '/images/shopee3.jpg',
      '/images/shopee4.jpg',
      '/images/shopee5.jpg',
      '/images/shopee6.jpg',
      '/images/shopee7.jpg',
    ],
    description: 'One-stop shop for all categories—beauty, gadgets, home, and more!',
    buttonLabel: 'Shop Now',
    shopUrl: 'https://shopee.com',
  },
  {
    name: 'PAJU Travel & Tour  Agency',
    images: [
      '/images/travel1.jpg',
      '/images/travel2.jpg',
      '/images/travel3.jpg',
      '/images/travel4.jpg',
      '/images/travel5.jpg',
      '/images/travel6.jpg',
      '/images/travel7.jpg',
    ],
    description: 'Explore the world with PAJU—your gateway to unforgettable travel experiences.',
    buttonLabel: 'Book Now',
    shopUrl: 'https://www.facebook.com/pajutravelandtours',
  },
  {
    name: 'France Salon Spa',
    images: [
      '/images/salon1.jpg',
      '/images/salon2.jpg',
      '/images/salon3.jpg',
      '/images/salon4.jpg',
      '/images/salon5.jpg',
      '/images/salon6.jpg',
      '/images/salon7.jpg',
    ],
    description: 'Pamper yourself with luxury hair and spa treatments—where beauty meets relaxation.',
    buttonLabel: 'Book Now',
    shopUrl: 'https://www.facebook.com/profile.php?id=61565027070084',
  },
];

function PlatformGallery({ platform }: { platform: { name: string; images: string[]; description: string; buttonLabel: string; shopUrl: string } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const images = platform.images;

  function prevImage() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function openModal(index: number) {
    setModalImageIndex(index);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-6 text-white flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
        <p className="text-gray-300 mb-4 text-sm">{platform.description}</p>
        <div className="relative flex-1">
          <img
            src={images[currentIndex]}
            alt={`${platform.name} product ${currentIndex + 1}`}
            className="w-full h-48 object-cover rounded-md cursor-pointer"
            onClick={() => openModal(currentIndex)}
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/70"
            aria-label="Previous Image"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/70"
            aria-label="Next Image"
          >
            ›
          </button>
        </div>
        <a
          href={platform.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform text-center"
        >
          {platform.buttonLabel}
        </a>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={images[modalImageIndex]}
            alt={`${platform.name} product ${modalImageIndex + 1}`}
            className="max-w-4xl max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            aria-label="Close Modal"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default function PricingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Product</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized product galleries designed to boost your shop and engage customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platformData.map((platform) => (
            <PlatformGallery key={platform.name} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
