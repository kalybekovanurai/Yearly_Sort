import React, { useState } from "react";
import "./App.css";
import { MY_DATA } from "./data/Users";
import styles from "./App.module.css";
import Title from "./Title";
import Select from "./components/Ui/Select";
import UserItem from "./UsersItem";

function App() {
  const [selectedYear, setSelectedYear] = useState("Sort By Year");

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

const filteredData = selectedYear === "Sort By Year" ? MY_DATA : MY_DATA.filter(item => item.year.toString() === selectedYear);
  return (
    <React.Fragment>
      <div>
        <Title text="Sort My Data" />
        <div>
          <Select onChange={handleYearChange} />
        </div>
        <div className={styles.container}>
          {filteredData.map((item) => (
            <UserItem
              key={item.id}
              first_name={item.first_name}
              year={item.year}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
