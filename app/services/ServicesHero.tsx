
'use client';

import { useState } from 'react';

const platformData = [
  {
    name: 'Facebook Commerce',
    images: [
      '/images/facebook1.jpg',
      '/images/facebook2.jpg',
      '/images/facebook3.jpg',
      '/images/facebook4.jpg',
      '/images/facebook5.jpg',
      '/images/facebook6.jpg',
      '/images/facebook7.jpg',
    ],
    shopUrl: 'https://www.facebook.com/commerce',
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
    shopUrl: 'https://www.tiktok.com/shop',
  },
  {
    name: 'Lazada Solutions',
    images: [
      '/images/lazada1.jpg',
      '/images/lazada2.jpg',
      '/images/lazada3.jpg',
      '/images/lazada4.jpg',
      '/images/lazada5.jpg',
      '/images/lazada6.jpg',
      '/images/lazada7.jpg',
    ],
    shopUrl: 'https://www.lazada.com',
  },
  {
    name: 'Shopee Management',
    images: [
      '/images/shopee1.jpg',
      '/images/shopee2.jpg',
      '/images/shopee3.jpg',
      '/images/shopee4.jpg',
      '/images/shopee5.jpg',
      '/images/shopee6.jpg',
      '/images/shopee7.jpg',
    ],
    shopUrl: 'https://shopee.com',
  },
  {
    name: 'Travel Agency',
    images: [
      '/images/travel1.jpg',
      '/images/travel2.jpg',
      '/images/travel3.jpg',
      '/images/travel4.jpg',
      '/images/travel5.jpg',
      '/images/travel6.jpg',
      '/images/travel7.jpg',
    ],
    shopUrl: 'https://travelagency.example.com',
  },
  {
    name: 'Salon Spa',
    images: [
      '/images/salon1.jpg',
      '/images/salon2.jpg',
      '/images/salon3.jpg',
      '/images/salon4.jpg',
      '/images/salon5.jpg',
      '/images/salon6.jpg',
      '/images/salon7.jpg',
    ],
    shopUrl: 'https://salonspa.example.com',
  },
];

function PlatformGallery({ platform }: { platform: { name: string; images: string[]; shopUrl: string } }) {
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
      <div className="max-w-md mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-4 text-white">
        <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
        <div className="relative">
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
          className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform"
        >
          Shop Now
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

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center">
        Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Product</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl text-center">
        Specialized product galleries designed to showcase offerings per platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {platformData.map((platform) => (
          <PlatformGallery key={platform.name} platform={platform} />
        ))}
      </div>
    </section>
  );
}
