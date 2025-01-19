import { IRawCatData } from 'types/api';

import { getCurrentPageData } from './helpers';

const testCatData = [
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
  { id: '16', url: 'https://example.com/cat16.jpg', width: 800, height: 600 },
  { id: '17', url: 'https://example.com/cat17.jpg', width: 1024, height: 768 },
  { id: '18', url: 'https://example.com/cat18.jpg', width: 640, height: 480 },
  { id: '19', url: 'https://example.com/cat19.jpg', width: 1920, height: 1080 },
  { id: '20', url: 'https://example.com/cat20.jpg', width: 1280, height: 720 },
  { id: '21', url: 'https://example.com/cat21.jpg', width: 1024, height: 768 },
  { id: '22', url: 'https://example.com/cat22.jpg', width: 500, height: 375 },
  { id: '23', url: 'https://example.com/cat23.jpg', width: 1500, height: 1000 },
  { id: '24', url: 'https://example.com/cat24.jpg', width: 800, height: 533 },
  { id: '25', url: 'https://example.com/cat25.jpg', width: 1200, height: 800 },
  { id: '26', url: 'https://example.com/cat26.jpg', width: 640, height: 427 },
  { id: '27', url: 'https://example.com/cat27.jpg', width: 1024, height: 1024 },
  { id: '28', url: 'https://example.com/cat28.jpg', width: 1500, height: 1125 },
  { id: '29', url: 'https://example.com/cat29.jpg', width: 960, height: 640 },
  { id: '30', url: 'https://example.com/cat30.jpg', width: 1024, height: 768 },
];

export const getTestCatData = (page: number): IRawCatData[] => {
  return getCurrentPageData<IRawCatData>(page, testCatData);
};

export const getTestFavoritesData = (page: number, favoritesIds: string[]): IRawCatData[] => {
  const filteredCats = testCatData.filter((catData) => favoritesIds.includes(catData.id));

  return getCurrentPageData<IRawCatData>(page, filteredCats);
};
