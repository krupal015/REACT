import React from 'react';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import LeftContent from './components/section1/LeftContent';

const App = () => {

 const users = [
    { no :"1",
       img :'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo sunt accusantium praesentium, numquam rem.',
      tag : ' Satisfied'
    },
     { no:"2", 
      img :"https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D ",
      intro :  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo sunt accusantium praesentium, numquam rem.",
      tag : "Interested "
    },
     { no:"3",
      img :" https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D ",
      intro :  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo sunt accusantium praesentium, numquam rem.",
      tag : " satisfied"
    },
     { no:"4",
      img :"https://media.istockphoto.com/id/2211808698/photo/smiling-businesswoman-holding-laptop-and-looking-away-near-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=2DKMXvDmJcnDWR0y7JR8LYSyA_OIEuL0qwpWs9c0S7Y= ",
      intro :  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo sunt accusantium praesentium, numquam rem.",
      tag : " exhust"
    }
  ]
  return (
    <div> 
      <Section1 users={users} />
      <Section2 />
       
     
    </div>
  );
};

export default App;