import { Link } from "react-router-dom";

const About = () => {
  const mainStyle = { height: "100vh" };

  return (
    <main style={mainStyle}>
      <h1>Our Story</h1>
      <p>
        Mollitia illo voluptatem tempore voluptatem. Molestiae dolorem nostrum
        cum. Ut unde explicabo totam id consequuntur quae non. Est sit sunt sed
        exercitationem. Cumque ad eum molestiae qui non aut. Laudantium culpa
        dolor ipsa quaerat ipsum blanditiis quia dignissimos alias. Dolor
        impedit praesentium optio fugiat excepturi quas quis et. Ut id eveniet
        quisquam vitae earum non aperiam culpa. Vitae beatae et nisi ducimus qui
        vel aut. Qui earum quidem assumenda est dolorem animi. Dolores
        cupiditate corporis ut nemo et quis autem ipsa. Et quo voluptatibus qui
        perspiciatis qui dolores voluptas minus.
      </p>
      <h1>Our Mission Statement</h1>
      <p>
        Rem architecto libero magni sint non nihil. Animi saepe consequatur
        dolores impedit enim rerum molestiae perferendis at. Sunt quis
        repudiandae vero aut. Eos qui beatae qui quaerat est. Et facere est eos
        officiis adipisci amet magnam.
      </p>
      <h1>Visit Us</h1>
      <p>
        If you're in the San Diego area, you can see for yourself what makes us
        different by visiting our physical nursery, where you can pick out
        plants yourself and find other specimens not show on the site. Normally,
        we are open to the public, but for the time being we are only taking
        people who have appointments to limit the amount of visitors.
      </p>
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    </main>
  );
};

export default About;
