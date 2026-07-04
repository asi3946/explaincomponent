import UserCard from "./UserCard";

type CardListProps = {
  cards: { id: string; name: string; comment: string }[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <div>
      {cards.map((card) => {
        return (
          <UserCard
            key={card.id}
            id={card.id}
            name={card.name}
            comment={card.comment}
          />
        );
      })}
    </div>
  );
};

export default CardList;
