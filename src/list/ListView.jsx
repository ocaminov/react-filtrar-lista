function ListView({ elements, funcFilterItems }) {
  //los componentes de presentacion reciben la informacion a traves de props
  return (
    <div>
      <input type="text" onChange={(ev) => funcFilterItems(ev.target.value)} />
      <ul>
        {elements.map(
          (nombre, index) => nombre && <li key={index}>{nombre}</li>
        )}
      </ul>
    </div>
  );
}

export default ListView;
