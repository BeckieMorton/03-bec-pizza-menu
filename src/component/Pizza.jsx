export const Pizza = (props) => {
  console.log(props); //passed a props object which is made ofthe 4 props passed to it. we need to take the values out of the object, so we need js
  return (
    <li className="pizza">
      <img
        src={props.pizzaObject.photoName}
        alt={props.pizzaObject.photoName}
      />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>${props.pizzaObject.price}</span>
      </div>
    </li>
  );
};
