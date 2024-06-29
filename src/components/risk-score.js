import "../App.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import ErrorIcon from "@mui/icons-material/Error";

const riskScoreMap = {
  LOW: { icon: <CheckCircleIcon />, text: "Low", className: "green" },
  MEDIUM: { icon: <DangerousIcon />, text: "Medium", className: "orange" },
  HIGH: { icon: <ErrorIcon />, text: "High", className: "red" },
};

const RiskScore = (riskScore) => {
  const { icon, text, className } = riskScoreMap[riskScore] || {};

  if (!icon || !text || !className) {
    return (
      <p className="Table-item">
        <span>Not calculated</span>
      </p>
    );
  }

  return (
    <p className="Table-item">
      {icon}
      <span className={className}>{text}</span>
    </p>
  );
};

export default RiskScore;
