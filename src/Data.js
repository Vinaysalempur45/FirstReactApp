import componentImg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import configImg from "./assets/config.png";

export const CORE_CONCEPTS = [
  {
    title: "JSX",
    image: jsxImg,
    discription: "Basic building block",
  },
  {
    title: "PROPS",
    image: configImg,
    discription: "Basic building block",
  },
  {
    title: "COMPONENTS",
    image: componentImg,
    discription: "Basic building block",
  },
  {
    title: "STATE",
    image: stateImg,
    discription: "Basic building block",
  },
];

export const EXAMPLES = {
  component: {
    title: "component",
    description: "XYZ",
    code: `function welcome(){
      return <h1>Hello world</h1>;
    }`,
  },
  jsx: {
    title: "jsx",
    description: "XYZ",
    code: `function welcome(){
      return <h1>Hello world</h1>;
    }`,
  },
  props: {
    title: "props",
    description: "XYZ",
    code: `function welcome(){
      return <h1>Hello world</h1>;
    }`,
  },
  state: {
    title: "state",
    description: "XYZ",
    code: `function welcome(){
      return <h1>Hello world</h1>;
    }`,
  },
};
