import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { SITE_NAME } from "../constants";

type InfoBoxProps = {
  text: string;
  link: string;
  btnText: string;
};

type HomeStage = 1 | 2 | 3 | 4;

type HomeInfoProps = {
  currentStage: HomeStage;
};

// info box
const InfoBox = ({ text, link, btnText }: InfoBoxProps) => (
  <div className="info-box">
    {/* info text */}
    <p className="font-medium sm:text-xl text-center">{text}</p>

    {/* info right arrow */}
    <Link to={link} className="neo-brutalism-white neo-btn" title={btnText}>
      {btnText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// render content (based upon current user cursor location)
const renderContent: Record<HomeStage, ReactNode> = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Bonjour, je suis <span className="font-semibold">{SITE_NAME}</span>
      👋
      <br />Développeur logiciel au Cameroun.
    </h1>
  ),
  2: (
    <InfoBox
      text="Mes expériences m’ont permis de développer de nombreuses compétences."
      link="/about"
      btnText="En savoir plus"
    />
  ),
  3: (
    <InfoBox
      text="Découvrez les projets qui reflètent mon parcours et mes compétences."
      link="/projects"
      btnText="Voir mes projets"
    />
  ),
  4: (
    <InfoBox
      text="Vous avez un projet ou recherchez un développeur ? Échangeons."
      link="/contact"
      btnText="Me contacter"
    />
  ),
};

// home info
const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
