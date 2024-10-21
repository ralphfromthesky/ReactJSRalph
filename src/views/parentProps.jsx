import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Main from "../components/main/main.jsx";
import PropsChildren from "./parentPropsChildren.jsx";
import GlobalModal from "../components/material/globalModal.jsx";
import { changeTheme } from "../store/store.tsx";
import {ReusableButtons} from '../components/reusableComponents/reusableButtons.tsx'


const Parentprops = () => {
  const [modalFromChild, openModalFromChild] = useState(false);
  const [openGlobal, setOpenGlobalModal] = useState(false);
  const { dark } = changeTheme();

  const handleCloseGloabalModal = () => {
    setOpenGlobalModal(false);
  };

  const handleOpenModal = () => {
    openModalFromChild(true);
  };
  const handleCloseModal = (falseFromChildComponent) => {
    openModalFromChild(falseFromChildComponent);
  };

  const pinasanga = true;
  const notesFromParent = "this notes comes from parent";
  const customModa = "fasdfasdfasdfasdfasdf12309";
  const person = [
    {
      name: "ralph",
      lastName: "santolorin",
      location: "navotas",
    },
  ];
  const newObject = [
    {
      product1: "milk",
      product2: "clothes",
      product3: "shoes",
    },
  ];
  const products = {
    ingredients1: "iron",
    ingredients2: "metal",
    ingredients3: "wood",
  };

  const students = [
    { name: "maris", age: 30, location: "navotas" },
    { name: "bell", age: 35, location: "singapore" },
    { name: "khalifa", age: 40, location: "manila" },
  ];

  const mgaNagingJow = [
    {name: 'joan', age: 40},
    {name: 'marisa', age: 35},

    {name: 'paula', age: 41},

    {name: 'karyle', age: 40},

  ]

  const makalimutin = [
    {name: 'joana lisay', age: 35},
    {name: 'joana mareie', age: 25},
    {name: 'sandra', age: 25},
    {name: 'emilyn', age: 35},

  ]
  const malakingTae = 'napakalaking tae'
  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <div>
          <ReusableButtons title="button ko" bg="red" height="2.5rem" width="10rem" color="white"/>
        </div>
        <Typography sx={{ color: dark ? "black" : "white" }}>
          this props parent component
        </Typography>
        <Button variant="contained" color="error" onClick={handleOpenModal}>
          this modal is from child component
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenGlobalModal(true)}
        >
          open global modal
        </Button>
        <PropsChildren
        mgaDatingJowa= {mgaNagingJow}
          mgaStudyante={students}
          newName="i am ralph rigor santolorin"
          message="this message comes from parent"
          openModal={modalFromChild}
          handleClose={handleCloseModal}
          personMe={person}
          newestObject={newObject}
          ing={products}
          anodaw={customModa}
          makakalimutinAko={makalimutin}
        />
        <br />
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Scenario: <br />
            In a React application, you often have components that need to share
            information. The parent component might have some data, and you want
            to make that data available to a child component. <br /> <br />{" "}
            Problem: <br />
            How do you send or pass data from a parent component to a child
            component? <br /> <br />
            Solution: <br />
            Props (short for properties) are a way to pass data from a parent
            component to a child component in React.
          </Typography>
          <br />
        </Box>
        <Box>
          <img src="image/props.png" />
          <img src="image/props2.png" />
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Explanation: <br /> In the ParentComponent, a variable (dataToSend)
            holds the data you want to send to the child component. The child
            component (ChildComponent) is rendered inside the parent, and the
            data is passed as a prop. In the ChildComponent, the data is
            available through the props object, and you can access it using
            props.message. <br /> <br />
            Key Points: <br />
            Props are a way to pass data from parent to child components. Data
            is passed as attributes in JSX when rendering the child component.
            The child component receives the data through the props object.
            Props are read-only; the child component can't modify the data
            received through props. <br /> <br /> In simple terms, props allow
            you to send data down the component tree from a parent to a child,
            enabling communication and data sharing between different parts of
            your React application.
          </Typography>
          <br />
        </Box>
      </Box>
      <GlobalModal
        bukasOpen={openGlobal}
        saradoClose={handleCloseGloabalModal}
        msgFromParent={notesFromParent}
        objectFromParent={person}
        tae={malakingTae}
        pinasangData={pinasanga}
      />
    </Main>
  );
};

export default Parentprops;
