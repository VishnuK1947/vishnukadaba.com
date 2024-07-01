import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  CardInfo,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
} from "./CardStyles";
import { BsPlusCircleFill } from "react-icons/bs";
import ProjectModal from "../Modal/ProjectModal";
import Link from "next/link";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

const variants = {
  pageInitial: {
    opacity: 0,
    scale: 0.5,
  },
  pageAnimate: {
    opacity: 1,
    scale: 1,
  },
  pageExit: {
    opacity: 0,
    scale: 0.5,
  },
};

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const { title, description, tags, image, imageWebp, images , repoUrl, demoUrl} =
    item;

  return (
    <motion.div
      key={title}
      className="project-card"
      layout
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
      transition={{ type: "tween" }}
    >
      <ImgContainer>
        <Picture>
          <source srcSet={imageWebp} type="image/webp" />
          <PictureImg src={image} alt={title} />
        </Picture>

        <Button
          type="button"
          aria-label="Open Project Gallery in a modal window"
          onClick={openModal}
        >
          <BsPlusCircleFill />
        </Button>
        <ProjectModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          title={title}
          images={images}
        />
      </ImgContainer>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className="card-info">{description}</CardInfo>
      <div className="card-footer">
        <TitleContent style={{ marginTop: "20px" }}>
          <b>Stack</b>
        </TitleContent>
        <TagList>
          {tags.map((t, i) => {
            return <Tag key={i}>{t}</Tag>;
          })}
        </TagList>
        <TitleContent>
          {repoUrl && (
          <a href={repoUrl} target="_blank" title="Go to project source" rel="noopener noreferrer">
           ✨Source 
          </a>)}
          &nbsp;&nbsp;
          {demoUrl && (
          <a href={demoUrl} target="_blank" title="Go to project demo" rel="noopener noreferrer">
          🎬Demo
          </a>)}
        </TitleContent>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
