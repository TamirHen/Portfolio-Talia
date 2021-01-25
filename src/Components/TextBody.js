import React from "react";

const TextBody = (props) => {
  const { title, subtitle, text } = props;

  return (
    <div className="project-page-text" style={{ margin: "50px 0px" }}>
      <div className="text-title">
        <h4>{title}</h4>
        <p style={{ fontSize: "16px" }}>{subtitle}</p>
      </div>
      <div
        className="text-body"
        style={{ fontSize: "15px", marginTop: "30px" }}
      >
        {text.split("\n").map((line) => (
          <p className="text-line">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default TextBody;
