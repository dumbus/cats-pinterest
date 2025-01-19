import { ICatData } from 'types/entities';

export interface ICatList {
  catList: ICatData[];
  isLoading: boolean;
  renderButton?: boolean;
  onRemove?: (id: string) => void;
  onLoadMore?: () => void;
}
