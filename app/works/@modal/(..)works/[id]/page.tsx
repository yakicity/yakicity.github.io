import CardDetail from "../../../../components/works/CardDetail";
import Modal from "../../../../components/Modal/Modal";
import swagData, { Work } from "../../../../data";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: Work = swagData.find((p) => p.id === id)!;

  return (
    // <CardDetail data={data} />
    <Modal>
      <CardDetail data={data} />
    </Modal>
  );
}