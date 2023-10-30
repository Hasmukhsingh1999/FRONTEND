import React from 'react';

const Wander = () => {
  const cardsData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1565127803082-69dd82351360?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card 1',
      description: 'Description 1',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1491249149628-28cb9a16356a?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card 2',
      description: 'Description 2',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1609649820825-b0595212a8d4?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card 3',
      description: 'Description 3',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1584419429783-c62f47aa1e04?auto=format&fit=crop&q=80&w=2067&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card 4',
      description: 'Description 4',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1573223681876-58934e9a1394?auto=format&fit=crop&q=80&w=2035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card 5',
      description: 'Description 5',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1629259379391-a19d74aaba4b?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card 6',
      description: 'Description 6',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[4vw] py-[2vw] ">
      {cardsData.map((card, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card.imageUrl} alt="Card" className="w-full h-[30vw] object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wander;

