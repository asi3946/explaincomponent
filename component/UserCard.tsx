type UserCardProps = {
  name: string;
  comment: string;
};

const UserCard = ({ name, comment }: UserCardProps) => {
  return (
    <div className="border-4 p-4 rounded-xl m-8">
      <h1 className="text-2xl">{name}</h1>
      <p>{comment}</p>
    </div>
  );
};
export default UserCard;
