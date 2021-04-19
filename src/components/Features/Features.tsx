import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./Features.module.css";
import styled from "styled-components";
const Features = () => {
  const [features, setFeatures] = useState<
    { title: string; description: string }[] | undefined
  >();
  useEffect(() => {
    setFeatures([
      {
        title: "Players",
        description:
          "We focus on the player and optimize his newsfeed with respect to which posts he may be most interested in",
      },
      {
        title: "Guilds",
        description:
          "We provide guild masters and admins the ability to seemlessly manage their members, make events, create polls and much more!",
      },
      {
        title: "Alliances",
        description:
          "We provide the abillity to form alliances between guilds like guild management wasn't enough we took it to the next level why stop at guilds?",
      },
      {
        title: "Organizations",
        description:
          "Organizations that organize a large player base can easily manage their large organization and provide their purpose with the proper tools needed to run a large scale operation!",
      },
    ]);
    return () => {};
  }, []);
  const CarouselWrapper = styled(Carousel)`
    .slick-dots li button {
      background: #ad2102;
    }
    .slick-dots li.slick-active button {
      background: #ad2102a1;
    }
  `;
  console.log("rerendered");

  return (
    <div className={styles.featuresBox}>
      <h3
        style={{
          position: "absolute",
          top: "22vh",
          left: "50%",
          transform: "translate(-50%,0)",
          textDecoration: "underline",
          color: "white",
          fontSize: "2.5em",
        }}
        className={styles.featureTitle}
      >
        So, what do we offer ?
      </h3>
      <div className={styles.featuresWrapper}>
        <CarouselWrapper
          effect="scrollx"
          key={features ? features.length : 1}
          dotPosition="bottom"
          autoplay={true}
          autoplaySpeed={2000}
          className={styles.textCarousel}
        >
          {features &&
            features.map((feature, index) => (
              <div key={index} className={styles.featureContainer}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.description}</p>
              </div>
            ))}
        </CarouselWrapper>
      </div>
      ;
    </div>
  );
};

export default Features;
