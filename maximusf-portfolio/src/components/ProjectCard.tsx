
type Props = {
    title: string;
    description: string;
    details: string;
    link: string;
}

const ProjectCard = (props: Props) => {
    return (
        <article>
            <h3>{ props.title }</h3>
            <p>{ props.description }</p>
            <p>{ props.details }</p>
            <div>
                <a href={ props.link }>View Project</a>
            </div>
        </article>
    )
}

export default ProjectCard;