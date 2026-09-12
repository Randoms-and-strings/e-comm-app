import messageStyles from "../styles/messages.module.css";
import handleUuid from "../hooks/serverHooks/handleKeyUuid";
import Link from "next/link";


export default function Messages(){
    const mockMessageData = [1, 2, 3];
    return (
        <section>
            
                <h1 className={messageStyles.header}>Messages</h1>
                {mockMessageData.map((count)=>{
                    return(
                        <Link className={messageStyles.link} style={{textDecoration:"none"}} key={handleUuid()} href="/messages/a">
                        <div  className={messageStyles.messageContainer}>
                            
                            <div title="senderName & isTyping" className={messageStyles.senderInfo}>
                                <h2>User A</h2>
                                <em><p style={{color:"grey"}}>User A is typing....</p></em>
                            </div>

                            <div title="messageTime & noOfMessages" className={messageStyles.senderMetaData}>
                                <p>11:55pm</p>
                                <div className={messageStyles.messageCountContainer}>
                                    <p><b>5</b></p>
                                </div>
                                
                                {/*TODO: if new msg true, bolden time, and new msg should be colored blue */}
                            </div>
                        </div>
                        </Link>
                        
                    );
                })}
                
              
        </section>
    );
}