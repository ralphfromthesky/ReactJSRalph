import { Box, Button, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import Main from "../components/main/main";
import {
  changeTheme,
  setData,
  setLogin,
  setOpenGlobalModal,
  useStore,
  UseObjectData,
} from "../store/store.tsx";
import ZustandChild1 from "./zustandChild1.tsx";
import ZustandChild4 from "./zustandChild4.tsx";
import ZustandChild3 from "./zustandChild3.tsx";
import ZustandChild2 from "./zustandChild2.tsx";
import GlobalModal from "../components/material/globalModal.jsx";
import ZustandAdmin from "./zustandAdmin.tsx";
import ZustandA from "./zustandA.tsx";
import ZustandB from "./zustandB.tsx";

const Zustand = () => {
  const { show } = setData();
  const { increment, count } = useStore();
  const ano = useStore().count;
  const { darkTheme, dark } = changeTheme();
  const { setOpenModal, openModal, setCloseModal, noteFromZustand } =
    setOpenGlobalModal();

  const { name: eman, balance, isFuck, whatTheFucks } = UseObjectData();

  const { isLogin, setIslogin, name: game } = setLogin();
  const [name, setName] = useState<any>("");
  const logIn = () => {
    if (name === "") {
      alert("please type name!");
      return;
    }
    setIslogin(true, game);
  };

  return (
    <Main>
      <Box sx={{ height: dark ? "" : "100vh" }}>
        <Typography
          variant="h2"
          color="initial"
          sx={{ color: changeTheme().dark ? "black" : "white" }}
        >
          state managemen zustand <br /> {count}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenModal()}
        >
          open global modal - {ano}
        </Button>
        <br />
        <br />
        <Button variant="contained" onClick={increment}>
          this function comes from zustand
        </Button>
        <br />
        <br />
        <Button onClick={darkTheme} variant="contained" color="error">
          buton from parent - changeLight
        </Button>

        <Box>
          <ZustandChild1 /> <ZustandChild2 /> <ZustandChild3 />
          <ZustandChild4 />
        </Box>
        <div className="flex justify-center">
          {!isLogin && (
            <div className="flex flex-col w-[20rem]">
              <TextField
                id=""
                label="Type your name"
                sx={{ marginBottom: "1rem" }}
                onChange={(e) => setName(e.target.value)}
              />
              <Button variant="contained" className="mt-[1rem]" onClick={logIn}>
                login {eman} - {balance} - {isFuck}
              </Button>
            </div>
          )}

          <div>{isLogin && <ZustandAdmin anoNameMo={name} />}</div>
          <div>
            <button
              className="bg-[red] p-[1rem]"
              onClick={() => whatTheFucks("ano gagawing mo!", 5000, true)}
            >
              TRY CLICK!
            </button>
          </div>
          {isFuck && (
            <>
              <div>
                show this WHAT THE F?!! {eman} {balance}
              </div>
            </>
          )}
        </div>

        <div className="h-[10rem] flex justify-between mt-2 border-2 border-black">
          <ZustandA />
          <ZustandB />
        </div>
      </Box>
      <GlobalModal
        bukasOpen={openModal}
        saradoClose={setCloseModal}
        what={noteFromZustand}
      />
    </Main>
  );
};

export default Zustand;
