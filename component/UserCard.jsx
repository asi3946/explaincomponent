export default function UserCard({ name, comment }) {
  return (
    <div className="border-4 border-gray-700 m-8">
      <h1 className="text-2xl">{name}</h1>
      <p>{comment}</p>
    </div>
  );
}
