import personalMessage from "../../styles/clicked-message.module.css";

export default function Message(){
    return(
        <section className={personalMessage.pageContainer}>
            {/* <div className={personalMessage.topOfMessages}></div> */}
            {/* <div className={personalMessage.forAligningRecipientBubbleLeft}> */}
                <div title="message-recipient" className={personalMessage.recipientBubble}>
                <p>this is the message user A sent you</p>
                </div>
            {/* </div> */}
            {/* <div className={personalMessage.forAligningRecipientBubbleRight}> */}
               <div title="message-sender" className={personalMessage.senderBubble}>
                <p>This id your message to user A</p>
                </div> 
            {/* </div> */}
            
            <div className={personalMessage.inputContainer}>
                <input title="message-box" placeholder="Send a message"/>
                <button title="send-message">Send</button>
            </div>
            
        </section>
    );
}