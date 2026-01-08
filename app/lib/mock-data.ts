import { Barber, Service } from '@/models/common';

export const MOCK_BARBERS: Barber[] = [
    {
      id: '1',
      name: 'Julian',
      specialty: 'Classic Cuts, Beard Trims',
      imageUrl: '/images/barbers/barber-1.jpg',
      bio: 'Julian is a master of traditional barbering techniques, with a passion for classic, timeless styles. He believes a great haircut is the foundation of a confident look.',
      availability: {},
    },
    {
      id: '2',
      name: 'Alex',
      specialty: 'Modern Styles, Fades',
      imageUrl: '/images/barbers/barber-2.jpg',
      bio: 'Alex lives on the cutting edge of hairstyling. He excels at creating sharp, modern looks and is an expert in all types of fades, from subtle to bold.',
      availability: {},
    },
    {
      id: '3',
      name: 'Leo',
      specialty: 'Creative Designs, Color',
      imageUrl: '/images/barbers/barber-3.jpg',
      bio: 'Leo is the artist of the team. He can turn your hair into a canvas, creating intricate designs and applying vibrant color with precision and creativity.',
      availability: {},
    },
    {
      id: '4',
      name: 'Marco',
      specialty: 'Scissor Cuts, Styling',
      imageUrl: '/images/barbers/barber-4.jpg',
      bio: 'Marco specializes in the art of the scissor cut, creating textured, natural-looking styles. His attention to detail in styling is second to none.',
      availability: {},
    },
];

export const MOCK_SERVICES: Service[] = [
    {
        id: '1',
        name: 'Classic Haircut',
        description: "A timeless cut, tailored to your preference. Includes a wash and style.",
        price: 50,
        duration: 45,
        imageUrl: '/images/services/classic-haircut.jpg',
    },
    {
        id: '2',
        name: 'Skin Fade',
        description: "A sharp, modern fade down to the skin. Precision and detail guaranteed.",
        price: 60,
        duration: 50,
        imageUrl: '/images/services/skin-fade.jpg',
    },
    {
        id: '3',
        name: 'Beard Trim & Shape-Up',
        description: "Expert shaping and trimming of your beard, finished with a straight razor line-up.",
        price: 35,
        duration: 30,
        imageUrl: '/images/services/beard-trim.jpg',
    },
    {
        id: '4',
        name: 'The Full Service',
        description: "The complete experience: a classic haircut and a deluxe hot towel beard trim.",
        price: 80,
        duration: 75,
        imageUrl: '/images/services/full-service.jpg',
    },
];
