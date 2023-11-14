export const Pizza = ({ pizzaObject }) => {
  //console.log(props); //passed a props object which is made ofthe 4 props passed to it. we need to take the values out of the object, so we need js
  //or we use {} and destructure it first and we arent having a new object called props.

  // if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.photoName} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
};
