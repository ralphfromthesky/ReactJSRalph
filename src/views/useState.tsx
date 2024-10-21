import React, { useEffect, useState } from "react";
import Main from "../components/main/main.jsx";
import { Box, Button, Typography, TextField, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { changeTheme, setImageAvatar } from "../store/store.tsx";
import GlobalModal from "../components/material/globalModal.jsx";
import { motion } from "framer-motion";


function UseState() {
  const navigate = useNavigate();
  const { setAvatar: setAvatars } = setImageAvatar();
  const initial = 20;
  const [name, setName] = useState("mario");
  const [count, setCount] = useState(initial);
  const { dark } = changeTheme();
  const [initialState, setState] = useState<any>(0);
  const [activeIndex, setActiveIndex] = useState<any>();
  const [avatarId, setAvatarId] = useState<any>(0);
  const [open, setOpen] = useState<any>(false);
  const [avatar, setAvatar] = useState<any>(
    window.sessionStorage.getItem("avatar")
  );
  const openModal = () => {
    setOpen(true);
  };
  const closedModal = () => {
    setOpen(false);
  };
  const saveImage = (event: any) => {
    setAvatar(event.target.src);
    setAvatarId(event.target.id);
    console.log(avatar, avatarId);
  };
  const saveAvatar = () => {
    window.sessionStorage.setItem("avatar", avatar);
    window.sessionStorage.setItem("avatarId", avatarId);
    setOpen(false);
  };
  const handleClick = (i: any) => {
    setActiveIndex(i);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  const reset = () => {
    setCount(initial);
  };
  const addCount = () => {
    setCount(count + 20);
  };
  const handleName = () => {
    setName("luigi");
  };

  const bigCount = () => {
    setCount(count + 1000)
  }

  const active = {
    height: "5rem",
    width: "5rem",
  };

  const Avatars = () => {
    return (
      <Box sx={{padding: '15px'}}>
        <Box sx={{ margin: "10px 0" }}>
          <button
            onClick={() => setState(1)}
            style={{ backgroundColor: initialState == 1 ? "yellow" : "" }}
          >
            ICONERAS
          </button>
          <button
            onClick={() => setState(2)}
            style={{ backgroundColor: initialState == 2 ? "yellow" : "" }}
          >
            ICONEROS
          </button>
        </Box>
        {initialState == 1 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              margin: "5px 0",
            }}
          >
            {Array.from(Array(25), (e, i) => (
              <div key={i} onClick={() => handleClick(i)}>
                <motion.img
                  onClick={(event) => saveImage(event)}
                  src={`/Masculine/${i}.png`}
                  id={`${i}`}
                  alt=""
                  style={{
                    ...active,
                    border: activeIndex == i ? "3px solid red" : "",
                    borderRadius: "15px",
                  }}
                />
              </div>
            ))}
            {activeIndex >= 0 && (
              <Button onClick={saveAvatar} variant="contained">
                submit
              </Button>
            )}
          </div>
        )}
        {initialState == 2 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              margin: "5px 0",
            }}
          >
            {Array.from(Array(24), (e, i) => (
              <div key={i} onClick={() => handleClick(i)}>
                <img
                  onClick={(event) => saveImage(event)}
                  id={`${i}`}
                  src={`/Feminine/${i}.png`}
                  alt=""
                  style={{
                    ...active,
                    border: activeIndex == i ? "3px solid red" : "",
                    borderRadius: "15px",
                  }}
                />
              </div>
            ))}
            {activeIndex >= 0 && (
              <Button onClick={saveAvatar} variant="contained">
                submit
              </Button>
            )}
          </div>
        )}
      </Box>
    );
  };

  const employee = [
    {name: 'ralph', age: 10},
    {name: 'tess', age: 15},
    {name: 'lea', age: 20}

  ]

  useEffect(() => {
    setAvatarId(window.sessionStorage.getItem("avatarId"));
  }, [avatarId]);
  
  return (
    <Main>
      <Box sx={{ marginBottom: "20px", color: dark ? "" : "white" }}>
        <Box textAlign={"center"}>
          <Typography variant="h2" color="black">useState - {name}</Typography>
          
        </Box>
   
        <Box>{name}</Box>
        {employee.map((val, index) => (
          <h1 key={index}>{val.name} - {index + 1}</h1>
        ))}
        <Button variant="contained" color="secondary" onClick={handleName}>
          change name
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setName("kupa")}
        >
          change name
        </Button>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" color="error" onClick={openModal}>
            change avatar
          </Button>
        </Box>

      </Box>
      <Box>
        <Typography variant="body1" color="initial">
          {count}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCount(count + 1)}
        >
          count
        </Button>
        <Button variant="contained" color="success" onClick={addCount}>
          new count
        </Button>
        <Button variant="contained" color="error" onClick={minusCount}>
          minus count
        </Button>
        <Button variant="contained" color="error" onClick={addFive}>
          Add Five
        </Button>
        <Button variant="contained" color="error" onClick={reset}>
          reset
        </Button>
        <Button variant="contained" color="success" onClick={bigCount}> add big</Button>
      </Box>
      <br />
      <Box>
        <Typography
          variant="h6"
          color="initial"
          component="p"
          sx={{ color: dark ? "black" : "white" }}
        >
          Scenario: <br />
          In a React component, you often need to manage and update state—pieces
          of data that can change over time based on user interactions, API
          calls, or other events. <br /> <br />
          Problem: <br /> How do you keep track of and update this state in a
          functional component? <br /> <br />
          Solution: <br />
          useState is a React hook that provides a way to declare state
          variables in functional components. Basic Usage:
        </Typography>
      </Box>
      <Box>
        <img src="https://github.com/ralphfromthesky/images/blob/main/useState.PNG?raw=true" />
        <img src="https://github.com/ralphfromthesky/images/blob/main/useState2.PNG?raw=true" />
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="initial"
          component="p"
          sx={{ color: dark ? "black" : "white" }}
        >
          Explanation:
          <br /> useState(0) initializes the state variable count with an
          initial value of 0. setCount is a function provided by useState to
          update the count state. When the button is clicked, it increments the
          count using the setCount function.
          <br />
          <br /> Key Points:
          <br /> useState is used to declare state variables in functional
          components. It takes an initial value as an argument and returns an
          array with the current state value and a function to update the state.
          The state is preserved between renders, and when the state is updated,
          React will re-render the component with the new state. <br />
          <br />
          In simple terms, useState helps you manage and update state in your
          React functional components, making them dynamic and interactive.
        </Typography>
        <GlobalModal
          bukasOpen={open}
          saradoClose={closedModal}
          me={<Avatars />}
        />
      </Box>
    </Main>
  );
}

export default UseState;
