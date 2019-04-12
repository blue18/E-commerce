import { ADD_ITEM } from '../actions/types';
import { SHOW_ITEM } from '../actions/types';
import { DELETE_ITEM } from '../actions/types';

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
      quantity: attributes.quantity.value,
      image: attributes.image.value
    }

    return Product;

  } else {
    return null;
  }
}

function findWithAttr(array, attr, value) {
  for(let i = 0; i < array.length; i += 1) {
    if(array[i][attr] === value) {
      return i;
    }
  }

  return -1;
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
    case DELETE_ITEM:

      // Get id of product to be removed
      const productID = action.payload.attributes.id.value;

      // Get all current products in the shopping cart 
      let currentProducts = state.listOfProducts; 

      // get index from current products in the shopping cart  
      const index = findWithAttr(currentProducts, "id", productID);

      return {
        listOfProducts: [...currentProducts.slice(0, index), ...currentProducts.slice(index + 1)]
      };
    default:
      return state;
  }
}
