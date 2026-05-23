import type {Message} from "../../../data/structs.ts";
import UserElement from "../../userDemo/UserElement.tsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import './ThreadMessage.css'
import rehypeKatex from "rehype-katex";
import TimestampFormatter from "../../../data/TimestampFormatter.ts";

function ThreadMessage(
    props: {message: Message}
) {
    return <section className={'message'}>
        <div className={'info-holder'}>
            <UserElement userId={props.message.senderId}/>
            <div className={'info-holder-spacer'}></div>
            <p>{TimestampFormatter(props.message.createdAt)}</p>
        </div>
        <div className={'markdown-message-holder'}>
            <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{props.message.content}</Markdown>
        </div>
    </section>
}

export default ThreadMessage;