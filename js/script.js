import {
    getInputValues,
    clearInputs
  } from "./dom.js";

import {
    postChainsaw,
    getAllChainsaws
} from "./api.js";
const submitButton = document.getElementById("submit_button");


export const refetchAllChainsaws = async () => {
    const allChainsaws = await getAllChainsaws();
  
    chainsaws = allChainsaws;
  
    renderItemsList(chainsaws, onEditItem, onRemoveItem);
  };

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const { name, power, price } = getInputValues();
  
    clearInputs();
  
    postChainsaw({
      name,
      power,
      price
    }).then(refetchAllChainsaws);
  });
