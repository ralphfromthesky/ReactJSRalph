import { create } from "zustand";
import { usePostData } from "../react-query/gethooks";
import { useNavigate } from "react-router-dom";

type Store = {
  count: number;
  increment: () => void;
};

export const useStore = create<Store>()((set) => ({
  count: 100,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

type darkLightTheme = {
  dark: boolean;
  darkTheme: () => void;
};

export const changeTheme = create<darkLightTheme>()((set) => ({
  dark: true,
  darkTheme: () =>
    set((tae) => ({
      dark: !tae.dark,
    })),
}));

type globalModal = {
  openModal: boolean;
  noteFromZustand: string;
  setOpenModal: () => void;
  setCloseModal: () => void;
};

export const setOpenGlobalModal = create<globalModal>()((set) => ({
  openModal: false,
  noteFromZustand: "",
  setOpenModal: () =>
    set(() => ({
      openModal: true,
      noteFromZustand: "this is from zustand state management message",
    })),
  setCloseModal: () => set(() => ({ openModal: false })),
}));

type globalLoaders = {
  openLoader: boolean;
  openGlobalLoader: () => void;
  closeGobalLoader: () => void;
};

export const globalLoaderLoading = create<globalLoaders>()((set) => ({
  openLoader: false,
  openGlobalLoader: () => set(() => ({ openLoader: true })),
  closeGobalLoader: () => set(() => ({ openLoader: false })),
}));

type successInput = {
  closeMod: boolean;
  closeModalFunc: (closeModal: boolean) => void;
};

export const closeglobalModal = create<successInput>()((set) => ({
  closeMod: false,
  closeModalFunc: (value: boolean) => set({ closeMod: value }),
}));

type valueFromApi = {
  valueOrData: [];
  getData: (data: any) => void;
};

export const passDataFromComponent = create<valueFromApi>((set) => ({
  valueOrData: [],
  getData: (data) =>
    set(() => ({
      valueOrData: data.valueOrData,
    })),
}));

type dataShows = {
  value: string;
  number: number;
  show: boolean;
  useToggles: (index: any, val: any) => void;
};

export const setData = create<dataShows>((set) => ({
  value: "",
  number: 0,
  show: true,
  useToggles: (val, index) => {
    set((state) => ({
      value: val,
      number: index,
      show: !state.show,
    }));
  },
}));

type avatar = {
  avatarImage: any;
  avatarId: any;
  setAvatar: (val: any, val2: any) => void;
};

export const setImageAvatar = create<avatar>((set) => ({
  avatarImage: "",
  avatarId: 0,
  setAvatar: (val, val2) => {
    set(() => ({
      avatarImage: val,
      avatarId: val2,
    }));
  },
}));

type login = {
  isLogin: Boolean;
  balance: Number;
  name: String;
  isVip: Boolean;
  setIslogin: (isLogin: Boolean, name: String) => void;
};

export const setLogin = create<login>((set) => ({
  isLogin: false,
  name: "",
  balance: 10000,
  isVip: false,
  setIslogin: (isLogin, name) => set({ isLogin, name }),
}));

type objectData = {
  name: string;
  balance: number;
  isFuck: boolean;
  whatTheFucks: (a: string, b: number, go: boolean) => void;
};

export const UseObjectData = create<objectData>((set) => ({
  name: 'jasmine',
  balance: 1000000,
  isFuck: false,
  whatTheFucks: (a, b, c) => {
    set((state) => ({
      name: a,
      balance: b,
      isFuck: c
    }));
  },
}));

