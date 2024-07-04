import "../App.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import ErrorIcon from "@mui/icons-material/Error";

const riskScoreMap = {
  'low': { icon: <CheckCircleIcon />, text: "Low", className: "green" },
  'medium': { icon: <DangerousIcon />, text: "Medium", className: "orange" },
  'high': { icon: <ErrorIcon />, text: "High", className: "red" },
};

const RiskScore = (riskScore) => {
  const { icon, text, className } = riskScoreMap[riskScore.riskScore] || {};

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
