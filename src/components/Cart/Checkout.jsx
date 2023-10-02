import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isLength = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postal = postalRef.current.value;
    const city = cityRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const postalIsValid = !isLength(postal);
    const cityIsValid = !isEmpty(city);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      street: street,
      postal: postal,
      city: city,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
        {!formValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.postal && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
        {!formValidity.postal && (
          <p>Please enter a valid postal code! (5 characters long)</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
        {!formValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
