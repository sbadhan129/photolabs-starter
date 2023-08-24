import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    "id": "1",
    "slug": "topic-1",
    "title": "Nature"
  },  
  {
    "id": "2",
    "slug": "topic-2",
    "title": "Travel"
  },
  {
    "id": "3",
    "slug": "topic-3",
    "title": "People"
  },
  {
    "id": "4",
    "slug": "topic-4",
    "title": "Fashion"
  },  
  {
    "id": "5",
    "slug": "topic-5",
    "title": "Animals"
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} />
      ))}
    </div>
  );
};


export default TopicList;