import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnLink from "../components/btnLink/btnLink";

import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectsList";

function Project() {
    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <BtnLink link={project.link} />
                        <BtnGitHub link={project.gitHubLink} />
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Project;
