import Link from "next/link";

type UserCardProps = {
  id: string;
  name: string;
  comment: string;
};

export default function UserCard({ id, name, comment }: UserCardProps) {
  return (
    <Link href={`/${id}`}>
      <div className="border-4 p-4 rounded-xl m-8">
        <h1 className="text-2xl">{name}</h1>
        <p>{comment}</p>
      </div>
    </Link>
  );
}
