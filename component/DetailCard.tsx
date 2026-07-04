import Image from "next/image";

interface UserDetailProps {
  image: string;
  name: string;
  comment: string;
}

export default function DetailCard({ image, name, comment }: UserDetailProps) {
  return (
    <div className="border-4 p-4 rounded-xl">
      <div className="flex border-b-4 p-4 mb-4 justify-center">
        <span className="text-2xl">{name}</span>
      </div>
      <div className="flex">
        <div className="mr-4 border-4 rounded-xl  overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={300}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-4 p-4 rounded-xl right-0">
          <span>{comment}</span>
        </div>
      </div>
    </div>
  );
}
