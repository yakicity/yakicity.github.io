import PaperDetail from "../../components/works/PaperDetail";
import swagData, { Paper } from "../../paper";

export default function WorkPage(){

  // データ全体から、idがURLと一致するデータを返す
  const data: Paper = swagData.find((p) => p.id === "2")!;

  return (
    <div className="w-10/12 container mx-auto my-10">
      <PaperDetail data={data} />
    </div>
  );
}