import heroImg from "../img/homeHero.png"

const HomeHero = () => {
  const containerStyle = {
      backgroundImage: `url(${heroImg})`,
      minHeight: '100vh'
  };

  return (
    <div style={containerStyle}>
      <h1>Houseplant Hero</h1>
      <button>Bring Life Into Your Home</button>
    </div>
  );
};

export default HomeHero;
