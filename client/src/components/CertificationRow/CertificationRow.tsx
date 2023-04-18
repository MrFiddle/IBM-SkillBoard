import { Category, Certificate } from "../../../lib/types";
import "./CertificationRow.css";
interface Props {
  certificate: Certificate;
}

const CertificationRow = ({ certificate }: Props) => {
  return (
    <div className="certification-row-general drop-shadow-md gap-40">
      <p>color</p>
      <p className="font-medium">{certificate.name}</p>
      <p>{certificate.type}</p>
      <p>{certificate.categories.toString()}</p>
      <p>69%</p>
    </div>
  );
};

export default CertificationRow;
