import DetailCard from "@/component/DetailCard";
import styles from "@/app/[id]/Page.module.css";
import { users } from "@/data/user"

interface DetailPageProps {
  params: { id: string };
};

const DetailPage = async ({
  params
}: DetailPageProps) => {
  const { id } = await params;
  const user = users.find((user) => user.id === id);

  if(!user) return <div>ユーザーが見つかりません</div>
  
  return (
    <div className="{main.module.css}">
      <DetailCard
        image={user.imageUrl || ""}
        name={user.name || ""}
        comment={user.comment || ""}
      />
    </div>
  );
}

export default DetailPage;