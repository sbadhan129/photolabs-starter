import React from "react";
import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ label, fetchPhotosByTopic, id }) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(id)} >
      <h3 className="topic-label">{label}</h3>
    </div>
  );
};

TopicListItem.defaultProps = {
  label: sampleDataForTopicListItem.label,
};

export default TopicListItem;