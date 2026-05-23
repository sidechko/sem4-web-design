import './MessageInputBox.css'
import {useState} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

function MessageInputBox(props: {
    postMessage: (messageText: string) => void
}) {
    const [mdMessageText, setMdMessageText] = useState('');


    return (
        <section className={'message-input-box-holder'}>
            <div className={'md-message-preview'}>
                <Markdown remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[rehypeKatex]}>{mdMessageText}</Markdown>
            </div>
            <div className={'message-input-box'}>
                <textarea name={'msg-input'} className={'message-input'}
                      onChange={(e) => {
                          setMdMessageText(e.target.value)
                      }}>
                </textarea>
                <div className={'message-box-controls'}>
                    <button className={'message-button accent-clickable'} onClick={() => {
                        props.postMessage(mdMessageText);
                    }}>
                        Send message
                    </button>
                </div>
            </div>
        </section>)
}

export default MessageInputBox