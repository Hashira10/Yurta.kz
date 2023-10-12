
const apartments = [
    {
      id: 1,
      name: 'Cozy apartment in the center',
      address: '143 Tole bi Street',
      price: 300000,
      rooms: '1',
      image: "/images/apartment1.jpg",
    },
    {
      id: 2,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 450000,
      rooms: '2',
      image: '/images/apartment2.jpg',
    },
    {
      id: 3,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 350000,
      rooms: '2',
      image: '/images/apartment3.jpg',
    },
    {
      id: 4,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 450000,
      rooms: '4',
      image: '/images/apartment4.jpg',
    },
    {
      id: 4,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 250000,
      image: '/images/apartment2.jpg',
    },
    {
      id: 4,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 250000,
      image: '/images/apartment2.jpg',
    },
    
    
  ];
  
  export function fetchApartments() {
    return Promise.resolve(apartments);
  }
  
  export function fetchApartmentById(id) {
    const apartment = apartments.find((apartment) => apartment.id === id);
    return Promise.resolve(apartment);
  }
  