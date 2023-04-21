import { Category, Certificate } from "../../../lib/types";
import "./CertificationRow.css";
interface Props {
  certificate: Certificate;
}

interface Colors {
  IBM: string;
  MyTeam: string;
  Industry: string;
}

const colors: Colors = {
  IBM: "certification-row-ibm",
  MyTeam: "certification-row-myteam",
  Industry: "certification-row-industry",
};

const CertificationRow = ({ certificate }: Props) => {
  return (
    <div className="certification-row-general drop-shadow-md">
      <div>
        <div
          className={` w-3 h-3 rounded-md ${
            colors[certificate.type as keyof Colors]
          }`}
        />
      </div>

      <p className="certification-row-name font-medium">{certificate.name}</p>

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
