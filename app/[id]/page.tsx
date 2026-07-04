import DetailCard from "@/component/DetailCard";
import styles from "@/app/[id]/Page.module.css"
import { defaultConfig } from "next/dist/server/config-shared";

interface DetailPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string; comment?: string }>;
};

const imageData: Record<string, string> = {
  "1": "/taro.png",
  "2": "/jiro.jpg",
  "3": "/saburo.png",
};

const DetailPage = async ({
  params,
  searchParams,
}: DetailPageProps) => {
  const { id } = await params;
  const { name, comment } = await searchParams;

  const dataUrl = imageData[id] || "";

  return (
    <div className="{main.module.css}">
      <DetailCard
        image={dataUrl}
        name={name || ""}
        comment={comment || ""}
      />
    </div>
  );
}

export default DetailPage;