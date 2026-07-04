import Image from "next/image";
import styles from "@/component/DetailCard.module.css";

interface UserDetailProps {
  image: string;
  name: string;
  comment: string;
}

const DetailCard = ({ image, name, comment }: UserDetailProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.nameSpace}>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.imageSpace}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={150}
            className={styles.image}
          />
        </div>
        <div className={styles.commentSpace}>
          <span className={styles.commet}>{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
