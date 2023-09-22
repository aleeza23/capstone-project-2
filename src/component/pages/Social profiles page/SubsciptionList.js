import React from "react";
import {
  BsFillCalendar2Fill,
  BsFillCalendar2EventFill,
  BsFillBellFill,
  BsFillCalendar2MinusFill,
  BsPersonFill,
  BsFillQuestionDiamondFill,
  BsTrash3Fill,
  BsRepeat,
  BsFillGearFill,
  BsFillLockFill,
} from "react-icons/bs";

function SubsciptionList() {
  const SubsciptionData = [
    {
      list: "My Subscription",
      icon: <BsFillCalendar2EventFill />,
      key: "1",
    },
    {
      list: "Billing info",
      icon: <BsFillCalendar2Fill />,
      key: "2",
    },
    {
      list: "Payment",
      icon: <BsFillCalendar2Fill />,
      key: "3",
    },
    {
      list: "Invoice ",
      icon: <BsFillCalendar2MinusFill />,
      key: "4",
    },
    {
      list: "Quiz",
      icon: <BsFillQuestionDiamondFill />,
      key: "5",
    },
    {
      list: "Edit Profile",
      icon: <BsFillGearFill />,
      key: "6",
    },
    {
      list: "Security",
      icon: <BsPersonFill />,
      key: "7",
    },
    {
      list: "Social Profile",
      icon: <BsRepeat />,
      key: "8",
    },
    {
      list: "Notifications",
      icon: <BsFillBellFill />,
      key: "9",
    },
    {
      list: "Privacy Policy",
      icon: <BsFillLockFill />,
      key: "10",
    },
    {
      list: "Delete Profile",
      icon: <BsTrash3Fill />,
      key: "11",
    },
    {
      list: "Linked Accounts",
      icon: <BsPersonFill />,
      key: "12",
    },
  ];

  return (
    <ul className='navbar-nav d-flex flex-column'>
      {SubsciptionData.map((items) => {
        const {list, icon, key} = items;
        return (
                     
            <li className='nav-item mb-3' key={key}>
            <span>{icon}</span><a className='nav-link d-inline  ' aria-current='page' href='#'>              
                
                {list}
              </a>
            </li>
          
        );
      })}
    </ul>
  );
}

export default SubsciptionList;
