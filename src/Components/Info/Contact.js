const Contact = () => {
  const mainStyle = {
    height: "100vh",
  };

  return (
    <div>
      <main style={mainStyle}>
        <h1>Contact</h1>
        <h2>Send Us A Message</h2>
        <p>
          Got questions or feedback? Or maybe you just wanna say thanks? If you
          want a response, remember to leave your email. If you need quick
          answers, be sure to check our FAQ
        </p>
        <label>
          Email<input></input>
        </label>
        <label>
          Subject<input></input>
        </label>
        <label>
          <textarea></textarea>
        </label>
        <h2>Find Us At:</h2>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </main>
      <aside></aside>
    </div>
  );
};

export default Contact;
