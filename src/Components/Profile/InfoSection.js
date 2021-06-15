const InfoSection = (props) => {
  const { title, info } = props;
  //Create an arr of objects, one per key:value pair
  const infoArr = (() => {
    const arr = [];
    for (const prop in info) {
      arr.push({ [prop]: info[prop] });
    }
    return arr;
  })();

  return (
    <div>
      <h1>{title}</h1>
      <section>
        {infoArr.map((info) => {
          const keyName = Object.keys(info)[0];
          return <p>{`${keyName}: ${info[keyName]}`}</p>;
        })}
      </section></div>
  );
};

export default InfoSection;
