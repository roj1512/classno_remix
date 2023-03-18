import classno from "classno";

const className = classno(
  "button",
  `
  background-color blue
  font-size 5rem

  & {
    color red
  }
`
);

export default function Button() {
  return <button className={className}>Button</button>;
}
