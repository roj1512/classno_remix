import classno from "classno";

const button = classno`${"button"}
  background-color blue
  font-size 5rem

  & {
    color red
  }
`;

export default function Button() {
  return <button className={button}>Button</button>;
}
