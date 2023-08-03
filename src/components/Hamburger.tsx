const hamburgerStyle = {
  width: "1rem",
  display: "flex",
  justifyContent: "space—around",
  flexFlow: "column nowrap",
  zIndex: 10,
  gap: ".25em",
};

const burgerStyle = {
  width: "2rem",
  height: "0.25rem",
  borderRadius: "10rem",
  backgroundColor: "white",
};

export default function Hamburger() {
  var burgers = [];
  for (var i = 0; i < 3; i++) {
    burgers.push(<div style={burgerStyle} key={i}></div>);
  }

  return <button style={hamburgerStyle}>{burgers}</button>;
}
