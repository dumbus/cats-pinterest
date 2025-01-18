import { IRawCatData } from 'types/api';

export const getTestCatData = (): IRawCatData[] => {
  return [
    { id: '1', url: 'https://example.com/cat1.jpg', width: 800, height: 600 },
    { id: '2', url: 'https://example.com/cat2.jpg', width: 1024, height: 768 },
    { id: '3', url: 'https://example.com/cat3.jpg', width: 640, height: 480 },
    { id: '4', url: 'https://example.com/cat4.jpg', width: 1920, height: 1080 },
    { id: '5', url: 'https://example.com/cat5.jpg', width: 1280, height: 720 },
    { id: '6', url: 'https://example.com/cat6.jpg', width: 1024, height: 768 },
    { id: '7', url: 'https://example.com/cat7.jpg', width: 500, height: 375 },
    { id: '8', url: 'https://example.com/cat8.jpg', width: 1500, height: 1000 },
    { id: '9', url: 'https://example.com/cat9.jpg', width: 800, height: 533 },
    { id: '10', url: 'https://example.com/cat10.jpg', width: 1200, height: 800 },
    { id: '11', url: 'https://example.com/cat11.jpg', width: 640, height: 427 },
    { id: '12', url: 'https://example.com/cat12.jpg', width: 1024, height: 1024 },
    { id: '13', url: 'https://example.com/cat13.jpg', width: 1500, height: 1125 },
    { id: '14', url: 'https://example.com/cat14.jpg', width: 960, height: 640 },
    { id: '15', url: 'https://example.com/cat15.jpg', width: 1024, height: 768 },
  ];
};
