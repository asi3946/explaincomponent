import DetailCard from "@/component/DetailCard";

type DetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string; comment?: string }>;
};

const imageData: Record<string, string> = {
  "1": "/taro.png",
  "2": "/jiro.jpg",
  "3": "/saburo.png",
};

export default async function DetailPage({
  params,
  searchParams,
}: DetailPageProps) {
  const { id } = await params;
  const { name, comment } = await searchParams;

  const dataUrl = imageData[id] || "";

  return (
    <div className="p-8">
      <DetailCard
        image={dataUrl}
        name={name || ""}
        comment={comment || ""}
      />
    </div>
  );
}