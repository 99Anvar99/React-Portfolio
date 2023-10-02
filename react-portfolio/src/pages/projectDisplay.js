import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/projectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/projectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    let githubLink;
    switch (id) {
        case "0":
            githubLink = (
                <a href="https://github.com/99Anvar99/Media-Universe">
                    <GitHubIcon />
                </a>
            );
            break;
        case "1":
            githubLink = (
                <a href="https://github.com/99Anvar99/Time-Quiz">
                    <GitHubIcon />
                </a>
            );
            break;
        case "2":
            githubLink = (
                <a href="https://github.com/99Anvar99/Note-Taker">
                    <GitHubIcon />
                </a>
            );
            break;
        case "3":
        default:
            githubLink = (
                <a href="https://github.com/99Anvar99/Weather-Application">
                    <GitHubIcon />
                </a>
            );
            break;
    }
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img
                src={project.image}
                width={"550px"}
                height={"auto"}
                alt={project.name}
            />
            <p>Project Respiratory: {githubLink}</p>
        </div>
    );
}
export default ProjectDisplay;