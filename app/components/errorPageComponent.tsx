import errorPage from "../styles/error-pages.module.css";

type errorProps = {
    children?: React.ReactNode,
    title:string,
    description:string,
    type:string,
    // src:string,
    imgComment?:string,

}
// type expectedErrorTexts = {
//     "error": string,
//     "badRequest":string,
//     "unauthorizedRequest":string,
//     "noResult":string,
//     "nullCart":string
// }
export default function ErrorComponent(props:errorProps){
    const reqImage:any = {  //type 'any' so ts stops shouting in my fucking FACE!!!!
                            //for some reason it doesnt accept objects typed in this 
                            // way using type declarations
        "error": "./unexpected-error.png",
        "badRequest": "/userbadrequest.png",
        "unauthorizedRequest": "/unauthorized-request.png",
        "noResult": "/nosearchresults.png",
        "nullCart": "/emptycart.png",
        
    }
    return (
        <div className={errorPage.container}>
            <div className={errorPage.imgContainer}>
               <img src={reqImage[props.type]}/> 
               <p className={errorPage.imgComment}>{props.imgComment}</p>
            </div>
            
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}