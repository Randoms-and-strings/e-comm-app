import personalMessage from "../../styles/clicked-message.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {arrowLeft} from "../../assets/fontAwesome";

export default function Message(){
    return(
        <section className={personalMessage.pageContainer}>
            <div className={personalMessage.topOfMessages}>
                <div><a href="/messages">{arrowLeft}</a></div>
                <h2>User A</h2>
            </div>
            
            <div title="message-recipient" className={personalMessage.recipientBubble}>
                <p>this is the message user A sent you</p>
                <p className={personalMessage.messageTime}>11:55pm</p>
            </div>
           
            
            
            <div title="message-sender" className={personalMessage.senderBubble}>
                <p>This id your message to user A</p>
                <p className={personalMessage.messageTime}>11:56pm</p>
            </div> 
            
            
            <div className={personalMessage.inputContainer}>
                <input title="message-box" placeholder="Send a message"/>
                <button title="send-message">Send</button>
            </div>
            
        </section>
    );
}