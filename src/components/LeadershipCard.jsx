import React from "react";

function LeadershipCard({ title, image, description, link }) {
  return (
    <div className="leadership-card">
      <h3>{title}</h3>
      <img class="leadership-img" src={image}/>
      <p>{description}</p>
      <br></br>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Website →
      </a>
    </div>
  );
}

export default LeadershipCard;