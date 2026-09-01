import errorPage from "../styles/error-pages.module.css";
type errorProps = {
    children: React.ReactNode,
    title:string,
    description:string,
    type:string,
}
export default function(props:errorProps){
    return (
        <div>
            <div className={errorPage.imgContainer}>
               <img /> 
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}