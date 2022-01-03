import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/bogdan.jpeg" alt="An image showing Bogdan" width={300} height={300} />
      </div>
      <h1>Hi, i'm Bogdan</h1>
      <p>
        I blog about Web Development - especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
