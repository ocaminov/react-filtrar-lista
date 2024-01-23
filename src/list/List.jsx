import { useState } from "react";
import ListView from "./ListView";
import frameworksList from "./items";

//Componentes de presentacion y componentes contenedores
//los componentes contenedores son los q manejan la informacion, los q acceeden directamente a los datos
function List() {
  const [items, setItems] = useState(frameworksList);

  function filterItems(searchPattern) {
    if (searchPattern === "") {
      setItems(frameworksList);
    } else {
      let newItems = filterItemsBySearchPattern(searchPattern);
      setItems(newItems);
    }
  }

  function filterItemsBySearchPattern(searchPattern) {
    let filterItems = frameworksList.map((item) =>
      item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null
    );
    return filterItems;
  }

  return <ListView elements={items} funcFilterItems={filterItems} />;
}

export default List;
