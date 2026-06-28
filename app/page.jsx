import UserCard from "../component/UserCard";
export default function Home() {
  return (
    <div>
      <UserCard name="田中 太郎" comment="数学が好きです" />
      <UserCard name="田中 二郎" comment="ラーメンが好きです" />
      <UserCard name="田中 三郎" comment="三河屋で働いています" />
    </div>
  );
}
