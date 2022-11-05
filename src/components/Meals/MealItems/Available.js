import styles from "./Available.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState, useCallback } from "react";

function Available() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealsHandler = async () => {
      const response = await fetch(
        "https://fooda-4cffa-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMealsHandler().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  //i can do this or i can just do the fetch command in the useEffect hook, it's the same thing except when its in the effect hook it wouldn't have dependencies

  if (isLoading) {
    return (
      <section className={styles.meals}>
        <p>Loading</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.meals}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default Available;
