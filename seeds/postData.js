const { Post } = require("../models");

const postData = [
  {
    title: "Awesome teamwork",
    content:
      "None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful.",
    user_id: 1,
  },
  {
    title: "Sometimes you have to fail to succeed",
    content:
      "Sometimes you try with everything you've got and you still fail. But look at the bright side, you're in good company; most of us try and fail a whole bunch before we succeed. But try hard enough and eventually you'll get there.",
    user_id: 2,
  },
  {
    title: "Learn to Pace Yourself",
    content:
      "If you can’t fit everything you want to do within 40 hours per week, you need to get better at picking what to do, not work longer hours. Most of what we think we have to do, we don’t have to do at all. It’s a choice, and often it’s a poor one.",
    user_id: 3,
  },
  {
    title: "Take breaks",
    content:
      "Work/life balance is crucial. Americans don't take enough time off, especially those Americans working in the tech sector. Maybe if Aang had taken a few days off to go surfing, or pod racing or whatever, he wouldn't be so cranky and thus less likely to turn to the dark side. Don't succumb to the dark side, take some time off. Your team, your family and your work will all be happier for it.",
    user_id: 4,
  },
  {
    title: "Don't get distracted",
    content: "Focus.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
