import React, { useEffect, useState } from "react";
import Main from "../components/main/main.jsx";
import { Box, Typography, Button } from "@mui/material";
import { useGetdata, useHandleDeletion } from "../react-query/gethooks.tsx";
import GlobalModal from "../components/material/globalModal.jsx";
import { changeTheme, passDataFromComponent } from "../store/store.tsx";
import Loader from "../components/material/loader.tsx";
import GlobalForm from "../components/material/globalForm.tsx";
import PositionedSnackbar from "../components/material/snackbar.tsx";
import Checkbox from "@mui/material/Checkbox";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import AddIcon from "@mui/icons-material/Add";


const ReactQuery = () => {
  const deleteMessage = "Succesfully Deleted";
  const bgColor = {
    backgroundColor: "#D32F2F",
  };
  const { mutate, isSuccess: mutateDelete } = useHandleDeletion();
  const { dark } = changeTheme();
  const useData = useGetdata();
  const [openModal, setOpenModal] = useState(false);
  const [newState, setNewState] = useState(true);
  const { isLoading, isSuccess } = useGetdata();


  const closeModal = () => {
    setOpenModal(false);
  };
  const setAddbtn = () => {
    setNewState(true);
    setOpenModal(true);
  };

  const getThisData = (value) => {
    passDataFromComponent.setState({valueOrData: value})
  }

  useEffect(() => {
    // getThisData(useData)
    getThisData(useData.data)
  }, [])
  return (
    <Main>
      <Box sx={{height: dark ? '' : '100vh'}}>
        <Loader openBukas={isLoading} />
        {isSuccess && (
          <Box sx={{ padding: "5px", textAlign: "right" }}>
            <Button
              variant="contained"
              color="success"
              onClick={setAddbtn}
              startIcon={<AddIcon />}
              sx={{ margin: "0 5px" }}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<AutoDeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        )}
        {useData?.data?.map((value, index) => (
          <Box
            key={value.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              textAlign: "left",
              padding: 1,
              border: "1px solid gray",
            }}
          >
            <Box
              variant="h6"
              color="initial"
              component="p"
              sx={{ color: dark ? "black" : "white" , width: '5vw'}}
            >
              {value.title}
            </Box>
            <Box
              variant="h6"
              color="initial"
              component="p"
              sx={{ color: dark ? "black" : "white" , width: '5vw'}}
            >
             ${value.price}
            </Box>
            <Box
              variant="h6"
              color="initial"
              component="p"
              sx={{ color: dark ? "black" : "white" , width: '5vw'}}
            >
              stocks - {value.balance}
            </Box>
    

            <Button
              variant="contained"
              color="error"
              onClick={() => mutate(value.id)}
              startIcon={<AutoDeleteIcon/>}
              onMouseOver={() => console.log('hover')}
            >
              Delete
            </Button>
          </Box>
        ))}
        <GlobalModal
          bukasOpen={openModal}
          saradoClose={closeModal}
          newState={newState}
          addThis={<GlobalForm />}
          delThis={
            <Box>
              <Typography variant="h4" color="initial">
                are you sure delete?
              </Typography>
              <Button variant="contained" color="error" >
                delete
              </Button>
            </Box>
          }
        />
        <PositionedSnackbar
          deleteSuccess={mutateDelete}
          deleteMsg={deleteMessage}
          backGColor={bgColor}
        />
      </Box>
    </Main>
  );
};

export default ReactQuery;
