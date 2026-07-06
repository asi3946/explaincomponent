import styles from "./all.module.css";

const users = [
  { id: "1", name: "田中 太郎", comment: "数学が好きです" },
  { id: "2", name: "田中 二郎", comment: "ラーメンが好きです" },
  { id: "3", name: "田中 三郎", comment: "三河屋で働いています" },
];

const Home = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className={styles.card} key={user.id}>
            <h1 className={styles.name}>{user.name}</h1>
            <p>{user.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
