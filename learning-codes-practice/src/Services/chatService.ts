export const fetchStudents = () => [
  {
    id: 1,
    name: "Rohit Sharma",
    avatar: "https://i.pravatar.cc/100?img=1",
    lastMessage: "Thank you sir!",
  },
  {
    id: 2,
    name: "Sneha Verma",
    avatar: "https://i.pravatar.cc/100?img=2",
    lastMessage: "I completed the assignment",
  },
  {
    id: 3,
    name: "Aman Gupta",
    avatar: "https://i.pravatar.cc/100?img=3",
    lastMessage: "Can you explain topic 5 again?",
  },
];

export const fetchMessages = (studentId: number) => {
  return [
    {
      sender: "student",
      text: "Hello sir!",
      time: Date.now() - 200000,
    },
    {
      sender: "tutor",
      text: "Hi, how can I help you?",
      time: Date.now() - 150000,
    },
  ];
};
