import CardDetail from "../../components/works/CardDetail";
import swagData, { Work } from "../../data";

export default function WorkPage(){

  // データ全体から、idがURLと一致するデータを返す
  const data: Work = swagData.find((p) => p.id === "5")!;

  return (
    <div className="w-10/12 container mx-auto my-10">
      <CardDetail data={data} />
    </div>
  );
}