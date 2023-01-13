import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';



export const links = [
  {
    title: 'Quick Menu',
    links: [
      {
        name: 'Overview',
        icon: <BackupTableOutlinedIcon />,
      },
      {
        name: 'Customers',
        icon: <AccountCircleOutlinedIcon />,
      },
      {
        name: 'Defaulters',
        icon: <LocalOfferOutlinedIcon />,
      },
      {
        name: 'Fulfilments',
        icon: <WalletOutlinedIcon />,
      },{
        name: 'Reconciliation',
        icon: <BsCurrencyDollar />,
      },
    ],
  },
];





export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
];
export const chatData = [
  {
    image:"https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg",
    message: 'Jessy Bandya Joined the engineering Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  }
];
