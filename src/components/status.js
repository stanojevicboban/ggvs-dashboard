import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CancelIcon from "@mui/icons-material/Cancel";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

const statusMap = {
  Approved: { icon: <CheckIcon />, text: "Approved" },
  "Customer Processing": {
    icon: <MoreHorizIcon />,
    text: "Customer Processing",
  },
  "Ready for Review": { icon: <MoreHorizIcon />, text: "Ready for review" },
  Rejected: { icon: <DoNotDisturbOnIcon />, text: "Rejected" },
  Cancelled: { icon: <CancelIcon />, text: "Cancelled" },
  "In progress": {
    icon: <MoreHorizIcon />,
    text: "User Accepted KYC Invitation",
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
