import React from "react";
import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ label }) => {
  return (
    <div className="topic-list__item">
      <h3 className="topic-label">{label}</h3>
    </div>
  );
};

TopicListItem.defaultProps = {
  label: sampleDataForTopicListItem.label,
};

export default TopicListItem;