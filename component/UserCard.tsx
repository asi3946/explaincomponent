import Link from "next/link";

interface UserCardProps {
  id: string;
  name: string;
  comment: string;
}

const UserCard = ({ id, name, comment }: UserCardProps) => {
  return (
    <Link href={`/${id}`}>
      <div className="border-4 p-4 rounded-xl m-8">
        <h1 className="text-2xl">{name}</h1>
        <p>{comment}</p>
      </div>
    </Link>
  );
};
export default UserCard;
