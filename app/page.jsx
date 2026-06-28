import CardList from "@/component/CardList";

const users = [
  { id: 1, name: "田中 太郎", comment: "数学が好きです" },
  { id: 2, name: "田中 二郎", comment: "ラーメンが好きです" },
  { id: 3, name: "田中 三郎", comment: "三河屋で働いています" },
];

export default function Home() {
  return (
    <div>
      <CardList cards={users} />
    </div>
  );
}
