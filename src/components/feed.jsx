import React, { useEffect } from "react";
import Post from "./post.jsx";
import { Box } from "@mui/material";
import Main from "./main/main.jsx";
import { useGetdata } from "../react-query/gethooks.tsx";

function Feed() {
  const { refetch } = useGetdata();

  useEffect(() => {
    refetch();
  }, []);

  const happening = [
    {
      name: "Ralph santolorin",
      id: 1,
      date: "12/12/2015",
      img: "https://github.com/ralphfromthesky/images/blob/main/withkids.jpg?raw=true",
      about: "Yes its About me!",
      about2: `
      Hey there! \uD83D\uDC4B It's me Ralph or GOGO, your friendly neighborhood programmer and solo parent extraordinaire. Life's a whirlwind when you're juggling lines of code and two little munchkins, but hey, wouldn't have it any other way!  \uD83D\uDCBB\uD83D\uDC67\uD83D\uDC66
      
      \n\nAs a software engineer living solo with my two amazing kiddos, every day is an adventure. From debugging bugs to bedtime stories, my life is a perfect blend of caffeine-fueled coding marathons and chaotic family fun. \uD83D\uDE05
      
      Sure, there are moments when I feel like I'm living in two different worlds – one filled with algorithms and deadlines, and the other with crayons and playgrounds. But you know what? I wouldn't trade this chaotic, beautiful mess for anything.
      
      Being a solo parent means wearing many hats – the coder hat, the chef hat, the storyteller hat, and sometimes, even the superhero cape. And while it's not always easy, seeing those little smiles and hearing their laughter make it all worth it.
      
      So here's to all the solo parent programmers out there – you're doing an amazing job! Remember, you're not alone on this journey. We may be solo parents, but together, we're a mighty force to be reckoned with. \uD83D\uDCAA
      
      Keep coding, keep parenting, and most importantly, keep being awesome!\u2728
      `,
    },
    {
      name: "Hired as Software Engineer at  Human incubator inc.,",
      id: 2,
      date: "7/19/2023 - 12-19-2024",
      img: "https://github.com/ralphfromthesky/images/blob/main/6.jpg?raw=true",
      about: "New Job!",
      about2:
        "As a passionate developer with a love for innovation, I couldn't be more excited to dive into this new chapter of my career. And guess what? We're not just pushing boundaries here; we're redefining them! Harnessing the power of Angular and C#, I'll be working alongside some of the brightest minds in the industry to craft cutting-edge solutions that revolutionize how we interact with technology. From sleek user interfaces to robust backend systems, every line of code I write will be dedicated to creating impactful experiences for our users. But it's not just about the tech. At Human Incubator Inc., we're a family. We collaborate, we innovate, and we celebrate each other's successes. Together, we're building more than just software; we're building a community driven by passion and creativity. So here's to new beginnings, endless possibilities, and a future filled with groundbreaking achievements. Let's code our way to greatness!  #NewJob #TechInnovation #AngularCSharp",
    },
    {
      name: "Hired as Web Developer at  Fly Asian inc.,",
      id: 3,
      date: "1/19/2023 - up to Present",
      img: "https://github.com/ralphfromthesky/images/blob/main/2.jpg?raw=true",
      about: "Exciting anouncement! New Job as WEB DEV!",
      about2: `
      Exciting Announcement! 🎉

      I'm thrilled to share that I've recently joined the incredible team at TechSolutions Ltd. as a Web Developer! 🚀
      
      As someone deeply passionate about crafting exceptional digital experiences, I couldn't be more excited to embark on this new journey. At TechSolutions, we're all about pushing the boundaries of what's possible in web development.
      
      Utilizing the power of React, Vue.js, Java, and Python, I'll be working collaboratively with a team of talented individuals to build innovative solutions that elevate user experiences to new heights.
      
      From dynamic front-end interfaces to robust back-end systems, every line of code I write will contribute to creating seamless and intuitive digital solutions that leave a lasting impression.
      
      But it's not just about the technology. At TechSolutions, we foster a culture of collaboration, creativity, and continuous learning. Together, we're not just building websites and applications; we're shaping the future of digital innovation.
      
      I'm incredibly excited to roll up my sleeves and dive into this new adventure. Here's to growth, creativity, and making a real impact in the world of web development!
      `,
    },
    {
      name: "Teaching kids to </Code>",
      id: 4,
      date: "4/20/2020",
      img: "https://github.com/ralphfromthesky/images/blob/main/7.jpg?raw=true",
      about: "Teaching my kids to code is much better..",
      about2: `As a parent, one of my greatest joys is sharing my passion for coding with my two amazing kiddos, aged 4 and 10. While some may think that coding is too complex for young minds, I firmly believe that with the right approach, even the youngest learners can grasp the fundamentals of programming.

             Every day, we set aside just 30 minutes to explore the world of coding together, using Python as our language of choice. Instead of formal lessons or lectures, we opt for a playful and interactive approach that keeps them engaged and excited to learn.
             
             For my 4-year-old, coding sessions often involve colorful blocks and simple commands that introduce concepts like sequencing and patterns. We use fun activities like coding puzzles and games to teach basic logic and problem-solving skills, all while fostering creativity and imagination.
             
             Meanwhile, my 10-year-old dives into more advanced topics, such as loops, functions, and even basic algorithms. We explore real-world applications of coding, from creating simple animations to building interactive stories, giving them a sense of accomplishment and pride in their creations.
             
             The key to our success lies in making learning feel like play. We turn coding into a game, with challenges and rewards that motivate them to keep coming back for more. Whether it's programming a virtual pet or designing their own mini-games, they're always eager to tackle the next coding adventure.
             
             Of course, I'm there every step of the way, offering guidance and encouragement as they navigate the world of coding. But ultimately, it's their curiosity and enthusiasm that drive our coding sessions forward, turning each day into a new and exciting learning experience.
             
             By dedicating just 30 minutes a day to coding, we're not only laying the foundation for valuable tech skills, but also instilling a love of learning that will last a lifetime. And who knows? Maybe one day, they'll be the ones teaching me a thing or two about the latest advancements in technology!`,
    },
    {
      name: "Ralph santolorin - Being a Solo Parent",
      id: 5,
      date: "15/20/2024",
      img: "https://github.com/ralphfromthesky/images/blob/main/solo.jpg?raw=true",
      about: "Atlast na my solo parent na but not happy...",
      about2:
        "Atlast nkakuha na din ng solo parent barangay certificate, what are the benefits??? Solo Parent ID Benefits in the Philippines -Parental Leave, Flexible Work Schedule ,Additional Support and Assistance, Skills Training and Education, Parent Effectiveness Services, Psychosocial Services ,Barangay Certificate, Proof of Financial Status.",
    },
    {
      name: "Ralph santolorin",
      id: 6,
      date: "3 times a week / 1.30 hrs",
      img: "https://github.com/ralphfromthesky/images/blob/main/4.jpg?raw=true",
      about: "GYM Time.....",
      about2: `In the hustle and bustle of daily life, finding time to hit the gym can feel like an impossible task. However, carving out even a small window of time for exercise is essential for building muscle and staying healthy.

      When it comes to managing time for the gym, it's all about prioritization and planning. Instead of waiting for spare moments to magically appear, it's important to proactively schedule gym sessions into your daily routine. Whether it's early morning, during lunch breaks, or in the evening, find a time that works best for you and stick to it consistently.
      
      Setting specific goals can also help motivate you to prioritize gym time. Whether you're aiming to build muscle, improve strength, or simply stay active, having clear objectives in mind can give you the drive to make time for exercise.
      
      Additionally, making the most of your gym sessions by focusing on compound exercises that target multiple muscle groups can maximize efficiency and results. Exercises like squats, deadlifts, bench presses, and pull-ups are great options for building overall strength and muscle mass in a shorter amount of time.
      
      Remember, consistency is key when it comes to seeing progress in the gym. Even if you only have a spare 30 minutes, making the effort to show up and give it your all can make a significant difference in the long run.
      
      So, next time you find yourself with a spare moment, don't let it go to waste. Head to the gym, prioritize your health, and work towards your fitness goals one rep at a time. Your body will thank you for it in the end!`,
    },

  ];
  return (
    <Main>
      <Box>
        <Post newPerson={happening} />
      </Box>
    </Main>
  );
}

export default Feed;

