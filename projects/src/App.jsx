import React from "react";
import Card from '../components/Card'
import { User } from "lucide-react";

const App = () => {
  const jobOpenings = [
  {
    logo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "5 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Pune, India"
  },
  {
    logo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  }
];

console.log(jobOpenings)

  return (
    <div className="parent">
    {jobOpenings.map(function(props,index){
      return <div key={index}>
        <Card company= {props.companyName}
                   post={props.post} 
                   logo ={props.logo}
                   date ={props.datePosted}
                   tag1={props.tag1}
                   tag2={props.tag2}
                   pay = {props.pay}
                   location={props.location}
                   />
        </div>
    })}
    </div>
  );
};

export default App;