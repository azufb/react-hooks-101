import { createContext } from "react";

const AppContext = createContext();

export default AppContext;

// 共有したいデータを持つコンポーネントと、それらを受け取りたいコンポーネントの両者でimportして使う。