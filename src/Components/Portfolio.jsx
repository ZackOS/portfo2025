/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
//import image from "../images/design-desk.jpeg";

//const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Rebuilding a Flood-Damaged Electric Bike",
    description:
      "Repaired a flood-damaged electric bike by reworking the hub motor, restoring damaged wiring, and troubleshooting the entire electrical system to bring the bike back into working condition.",
    url: "https://github.com/ZackOS",
  },
  {
    title: "Light Steel Canopy Construction (15 m²)",
    description:
      "Designed and built a 20 m² canopy using light steel framing, including measurement, cutting, assembly, and installation.",
    url: "https://github.com/ZackOS",
  },
  {
    title: "My Early IT Journey Blog",
    description:
      "A collection of learning notes, experiments, and reflections I wrote during my IT studies, covering topics from coding fundamentals to early project builds.",
    url: "https://geekybray.blogspot.com/",
  },
  {
    title: "Personal Side Projects Collection",
    description:
      "A collection of small projects and experiments I built to strengthen my skills in programming, system tools, and IT fundamentals.",
    url: "https://github.com/ZackOS",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
