import personalMessage from "../../styles/clicked-message.module.css";

export default function Message(){
    return(
        <section>
            <div title="message-recipient">
                <p>this is the message user A sent you</p>
            </div>
            <div title="message-sender">
                <p>This id your message to user A</p>
            </div>
            <div >
                <input title="message-box"/>
                <button title="send-message">Send</button>
            </div>
            
        </section>
    );
}