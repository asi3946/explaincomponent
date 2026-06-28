export default function UserCard({ name, comment }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
}
