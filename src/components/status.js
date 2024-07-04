import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CancelIcon from "@mui/icons-material/Cancel";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

const statusMap = {
  2: { icon: <CheckIcon />, text: "Approved" },
  4: { icon: <MoreHorizIcon />, text: "Ready for review" },
  3: { icon: <DoNotDisturbOnIcon />, text: "Rejected" },
  11: { icon: <MoreHorizIcon />, text: "In progress" },
  5: {
    icon: <MoreHorizIcon />,
    text: "In progress",
  },
};

const StatusComponent = ({ status }) => {
  const { icon, text } = statusMap[status] || {};

  if (!icon || !text) {
    return null; // or return a default value if needed
  }

  return (
    <p className="Table-item">
      {icon}
      <span>{text}</span>
    </p>
  );
};

export default StatusComponent;
