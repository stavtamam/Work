import {ICard} from "./card.interface";

export const CARDS:ICard[]= [
  {
    id: 1,
    name: 'Bobcut',
    price: {
      price: 80,
      currency: 'ILS'
    },
    img: 'https://i.dailymail.co.uk/1s/2021/12/15/17/51833531-0-image-a-48_1639587608955.jpg',
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod tincidunt massa at placerat. Fusce dictum posuere consectetur. Maecenas dapibus, ipsum et mollis porttitor, lorem leo gravida nulla, vitae lacinia sapien lectus lacinia eros.',

  },
  {
    id: 2,
    name: 'A Day Off At The Spa',
    price: {price: 250, currency: 'ILS'},
    img: 'https://imageio.forbes.com/blogs-images/keithflamer/files/2019/01/E1D_2438-1200x801.jpg?format=jpg&width=1200',
    description: 'Nulla facilisi. Maecenas dictum fringilla libero, id scelerisque mauris. Aenean sollicitudin elementum pellentesque.',
  },
  {
    id: 3,
    name: 'Scalp Massage',
    price: {price: 100, currency: 'ILS'},
    img: 'https://cdn.shopify.com/s/files/1/0086/6320/3921/files/shutterstock_1141813637_1.jpg?v=1576077369',
    description:'Aenean consequat efficitur ligula quis scelerisque. Sed fermentum leo quis lectus accumsan iaculis. Morbi porttitor orci eget tellus porta, eleifend mattis purus ullamcorper. Vivamus suscipit rhoncus ex. ',
  },
  {
    id: 4,
    name: 'Hot Towel Steam Facial',
    price: {price: 150, currency: 'ILS'},
    img: 'https://images.squarespace-cdn.com/content/v1/5e57f1fa11adeb18cf1698f3/1598028499277-2NRBYLNNRGD24QOUF3SO/pet-spa-p.jpg',
    description:'Praesent neque erat, aliquet eget odio eu, posuere fermentum arcu. Donec justo augue, blandit quis mattis non, pharetra vitae quam. Morbi vel laoreet leo. Quisque bibendum, tellus nec pulvinar rhoncus, lectus eros tristique mi, eu interdum quam purus vitae diam. Suspendisse consectetur tempus turpis, in tincidunt velit rutrum at. ',
  }

];
