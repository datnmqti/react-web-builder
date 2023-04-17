import React from "react";

type ExportButtonProps = {
  onClick: () => void;
};

const ExportButton: React.FC<ExportButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Export
    </button>
  );
};

export default ExportButton;
