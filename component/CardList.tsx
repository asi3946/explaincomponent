import UserCard from "./UserCard";

type CardListProps = {
  cards: { id: string; name: string; comment: string }[];
};

export default function CardList({ cards }: CardListProps) {
  return (
    <div>
      {cards.map((card) => {
        return (
          <UserCard key={card.id} name={card.name} comment={card.comment} />
        );
      })}
    </div>
  );
}
