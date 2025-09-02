import { MY_DATA } from "../../data/Users";

type SelectProps = {
  onChange: (value: string) => void;
};

const Select = ({ onChange }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  const uniqueYears = Array.from(
    new Set(MY_DATA.map((item) => item.year))
  ).sort((a, b) => a - b);

  return (
    <div>
      <select onChange={handleChange}>
        <option value="Sort By Year">Sort By Year</option>
        {uniqueYears.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
