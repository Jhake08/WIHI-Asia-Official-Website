'use client';

export default function Gallery() {
  const packagingParcels = [
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

  const shipmentParcels = [
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

  const satisfiedCustomers = [
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

  const renderGallery = (title: string, items: {image: string, caption: string, message: string}[]) => (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item: {image: string, caption: string, message: string}, index: number) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.caption}</h3>
                <p className="text-gray-300">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <main className="bg-black min-h-screen">
      {renderGallery('Packaging Parcel Gallery', packagingParcels)}
      {renderGallery('Shipment Parcel Gallery', shipmentParcels)}
      {renderGallery('Satisfied Customer Gallery', satisfiedCustomers)}
    </main>
  );
}
