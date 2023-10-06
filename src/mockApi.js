
const apartments = [
    {
      id: 1,
      name: 'Cozy apartment in the center',
      address: '143 Tole bi Street',
      price: 300000,
      // Другие данные о квартире
    },
    {
      id: 2,
      name: 'Spacious two-bedroom apartment',
      address: '116 seifullina street',
      price: 250000,
      // Другие данные о квартире
    },
    // Добавьте больше квартир по необходимости
  ];
  
  export function fetchApartments() {
    return Promise.resolve(apartments);
  }
  
  export function fetchApartmentById(id) {
    const apartment = apartments.find((apartment) => apartment.id === id);
    return Promise.resolve(apartment);
  }
  