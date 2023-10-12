
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
      rooms: '1',
      image: '/images/apartment3.jpg',
    },
    {
      id: 4,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 450000,
      rooms: '3',
      image: '/images/apartment4.jpg',
    },
    {
      id: 5,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 500000,
      image: '/images/apartment5.jpg',
      rooms: '2'
    },
    {
      id: 6,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 350000,
      image: '/images/apartment6.jpg',
      rooms: '3'
    },
    {
      id: 7,
      name: 'Spacious two-bedroom apartment',
      address: 'astana, saraishyk 1',
      price: 400000,
      image: '/images/apartment7.jpg',
      rooms: '2'
    },
    {
      id: 8,
      name: 'Wonderful apartment',
      address: 'almaty, tole bi 2',
      price: 450000,
      image: '/images/apartment8.jpg',
      rooms: '3'
    },
    {
      id: 9,
      name: 'Minimalist two-bedroom apartment',
      address: 'almaty, al-farabi 100',
      price: 500000,
      image: '/images/apartment9.jpg',
      rooms: '2'
    }
  ];
  
  export function fetchApartments() {
    return Promise.resolve(apartments);
  }
  
  export function fetchApartmentById(id) {
    const apartment = apartments.find((apartment) => apartment.id === id);
    return Promise.resolve(apartment);
  }
  