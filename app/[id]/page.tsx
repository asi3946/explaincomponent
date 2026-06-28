import DetailCard from "@/component/DetailCard";

type DetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string; comment?: string }>;
};

export default async function DetailPage({
  params,
  searchParams,
}: DetailPageProps) {
  const { id } = await params;
  const { name, comment } = await searchParams;

  return (
    <div className="p-8">
      <DetailCard 
        image="" 
        name={name || ""} 
        comment={comment || ""} 
        />
    </div>
  );
}