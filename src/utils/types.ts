import { IProductsState } from "../redux/slicer/productsSlice/types";

export interface IState {
  language: string;
  products: IProductsState;
}
