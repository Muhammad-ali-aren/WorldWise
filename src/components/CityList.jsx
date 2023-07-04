import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import { useCities } from "../context/CitiesContext";
function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="pls add your first city by clicking on any place in map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
