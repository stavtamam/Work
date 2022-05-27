export interface IPrice {
  price?:number;
  currency: 'ILS';

}

export interface ICard {
  id:number;
  name?:string;
  price?:IPrice;
  img?:string;
  description:string;
}
