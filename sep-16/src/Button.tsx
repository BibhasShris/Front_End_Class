export default function Button() {
  const isSpecial = false;
  let buttonText = "";
  if (isSpecial) {
    buttonText = "I'm a Special Button";
  } else {
    buttonText = "I'm a Normal Button";
  }
  return <button className="myButton">Click me</button>;
}
