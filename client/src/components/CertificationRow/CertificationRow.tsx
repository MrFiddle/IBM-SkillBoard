import { Category, Certificate } from "../../../lib/types";
import "./CertificationRow.css";
interface Props {
  certificate: Certificate;
}

const CertificationRow = ({ certificate }: Props) => {
  return (
    <div className="certification-row-general drop-shadow-md gap-40">
      <div className=" w-3 h-3 rounded-md bg-[#001756]"></div>
      <p className="certification-row-name font-medium w-40">
        {certificate.name}
      </p>
      <p>{certificate.type}</p>
      <ul>
        {certificate.categories.map((item, i) => {
          return (
            <li key={i} className="certification-row-name">
              - {item.name}
            </li>
          );
        })}
      </ul>
      <p>69%</p>
    </div>
  );
};

export default CertificationRow;
