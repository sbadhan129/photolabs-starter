import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = 
  [
    {
    id: 1,
    title: "People",
    slug: "people"
    },
    {
    id: 2,
    title: "Nature",
    slug: "nature"
    },
    {
    id: 3,
    title: "Travel",
    slug: "travel"
    },
    {
    id: 4,
    title: "Animals",
    slug: "animals"
    },
    {
    id: 5,
    title: "Fashion",
    slug: "fashion"
    }
    ];
    
const TopicList = ({fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem key={topic.id} id={topic.id} label={topic.title} fetchPhotosByTopic = {fetchPhotosByTopic}  />
      ))}
    </div>
  );
};


export default TopicList;