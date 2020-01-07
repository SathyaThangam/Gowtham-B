// const init=[{
//   name:"",
//   image:"",
//   price:"",
//   details:"",
// }]
const init = {
  item: []
};
const selectedItem = (state = init, action) => {
  switch (action.type) {
    case "ITEM_SELECTED": {
      return {
        item: [...state.item, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};

export default selectedItem;
