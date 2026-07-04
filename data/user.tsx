export interface UserData {
    id: string;
    name: string;
    comment: string;
    imageUrl?: string;
}

export const users: UserData[] = [
  { id: "1", name: "田中 太郎", comment: "数学が好きです", imageUrl: "/taro.png"},
  { id: "2", name: "田中 二郎", comment: "ラーメンが好きです", imageUrl: "/jiro.jpg"},
  { id: "3", name: "田中 三郎", comment: "三河屋で働いています", imageUrl: "/saburo.png"},
];