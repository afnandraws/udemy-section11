import MealsSummary from "./MealsSummary";
import Available from "./MealItems/Available";
import { Fragment } from "react";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <Available />
    </Fragment>
  );
}

export default Meals;
