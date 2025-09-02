import styles from "./App.module.css";

interface UsersItemProps {
  first_name: string;
  year: number;
  id?: number;
}

const UsersItem = ({ first_name, year }: UsersItemProps) => {
  return (
    <div className={styles.box}>
      <p>{first_name}</p>
      <code>{year}</code>
    </div>
  );
};

export default UsersItem;
