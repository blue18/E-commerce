import { ADD_ITEM } from '../actions/types';
import { SHOW_ITEM } from '../actions/types';

const initialState = {
  listOfProducts: []
}

function extractProduct(product) {

  // Get attributes associated with the button node.
  const attributes = product.attributes;

  if(attributes !== undefined) {
    const Product = {
      id: attributes.id.value,
      name: attributes.name.value,
      price: attributes.price.value,
      description: attributes.description.value,
      quantity: attributes.quantity.value
    }

    return Product;

  } else {
    return null;
  }
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_ITEM: 

      const newProduct = extractProduct(action.payload);
      
      return {
        ...state, 
        listOfProducts: [...state.listOfProducts, newProduct]
      }
    case SHOW_ITEM:
      console.log('showing item...');
      return state;
    default:
      return state;
  }
}
