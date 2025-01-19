export interface ICard {
  id: string;
  imageUrl: string;
  onRemove?: (id: string) => void;
}
