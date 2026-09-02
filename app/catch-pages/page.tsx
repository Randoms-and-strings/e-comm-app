import ErrorComponent from "../components/errorPageComponent";


export default function ErrorPage(){
    return(
        <div>
           <ErrorComponent 
           type="error"
        //    src="/userbadrequest.png"
        title="404 bad request!"
        description="this page does not exist"
        imgComment="Oops..."
           />
        </div>
        
    );
}