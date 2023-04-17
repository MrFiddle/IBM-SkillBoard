import { Category } from "../../../lib/types";
import "./CertificationRow.css";
interface Props {
  name: string;
  type: string;
  categories: Category[];
}

const CertificationRow = ({ name, type, categories }: Props) => {
  return (
    <div className="certification-row-general drop-shadow-md gap-40">
      <p>color</p>
      <p className="font-medium">SCRUM Master Certificate</p>
      <p>IBM</p>
      <p>Categories</p>
      <p>69%</p>
    </div>
  );
};

export default CertificationRow;
