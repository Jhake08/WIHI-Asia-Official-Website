'use client';

import { useState, useEffect, useRef } from 'react';

interface GalleryItem {
  image: string;
  caption: string;
  message: string;
}

const packagingParcels: GalleryItem[] = [
  {
    image: 'https://readdy.ai/api/search-image?query=Packaging%20parcel%20gallery%201&width=400&height=300&orientation=landscape',
    caption: 'Careful and Secure Packaging for Every Parcel',
    message: 'Ensuring your products are protected with premium materials and expert handling.'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Packaging%20parcel%20gallery%202&width=400&height=300&orientation=landscape',
    caption: 'Eco-Friendly Packaging Solutions',
    message: 'Committed to sustainability while maintaining the highest quality standards.'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Packaging%20parcel%20gallery%203&width=400&height=300&orientation=landscape',
    caption: 'Custom Packaging Designs',
    message: 'Tailored packaging that reflects your brand and delights your customers.'
  }
];

const shipmentParcels: GalleryItem[] = [
  {
    image: 'https://readdy.ai/api/search-image?query=Shipment%20parcel%20gallery%201&width=400&height=300&orientation=landscape',
    caption: 'On-Time Shipment Guarantee',
    message: 'Reliable delivery schedules to keep your business running smoothly.'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Shipment%20parcel%20gallery%202&width=400&height=300&orientation=landscape',
    caption: 'Real-Time Tracking',
    message: 'Stay informed with live updates on your parcel’s journey.'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Shipment%20parcel%20gallery%203&width=400&height=300&orientation=landscape',
    caption: 'Safe and Secure Handling',
    message: 'Every parcel is treated with utmost care throughout the shipping process.'
  }
];

const satisfiedCustomers: GalleryItem[] = [
  {
    image: 'https://readdy.ai/api/search-image?query=Happy%20customer%20gallery%201&width=400&height=300&orientation=landscape',
    caption: 'Trusted by Thousands',
    message: 'Our customers’ satisfaction is our top priority.'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Happy%20customer%20gallery%202&width=400&height=300&orientation=landscape',
    caption: 'Positive Feedback',
    message: 'Hear from our delighted clients who rely on our services.'
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Happy%20customer%20gallery%203&width=400&height=300&orientation=landscape',
    caption: 'Building Long-Term Relationships',
    message: 'We value every partnership and strive for excellence.'
  }
];

function Carousel({ items }: { items: GalleryItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = items.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const next = (currentIndex + 1) % length;
    timeoutRef.current = setTimeout(() => setCurrentIndex(next), 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, length]);

  const prevSlide = () => {
    const prev = (currentIndex - 1 + length) % length;
    setCurrentIndex(prev);
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % length;
    setCurrentIndex(next);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-64 object-cover object-center rounded-xl"
              />
              <div className="p-4 bg-gray-900 text-white rounded-b-xl">
                <h3 className="text-xl font-semibold">{item.caption}</h3>
                <p className="text-gray-300">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}

export default function Gallery() {
  return (
    <main className="bg-black min-h-screen py-16 px-6">
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Packaging Parcel Gallery</h2>
        <Carousel items={packagingParcels} />
      </section>
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Shipment Parcel Gallery</h2>
        <Carousel items={shipmentParcels} />
      </section>
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Satisfied Customer Gallery</h2>
        <Carousel items={satisfiedCustomers} />
      </section>
    </main>
  );
}
