export const petsToDisplay = (state=[], action) => {
  switch(action.type){
    case 'PETS': 
    return action.petsToDisplay
    default: 
    return state;
  }
}