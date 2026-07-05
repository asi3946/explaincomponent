import styles from "./UserCard.module.css";
import Link from "next/link";

interface UserCardProps {
  id: string;
  name: string;
  comment: string;
}

const UserCard = ({ id, name, comment }: UserCardProps) => {
  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <h1 className={styles.name}>{name}</h1>
        <p>{comment}</p>
      </div>
    </Link>
  );
};
export default UserCard;
