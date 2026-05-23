import TimestampFormatter from "../../../data/TimestampFormatter.ts";
import './ThreadPreview.css';
import {Rate} from 'antd';
import {type Thread} from "../../../data/structs.ts";
import UserElement from "../../userDemo/UserElement.tsx";
import {useNavigate} from "react-router-dom";

function ThreadPreview(prop: {
    thread: Thread;
    disableUserElement?: boolean;
    focused?: boolean;
}) {

    const navigate = useNavigate();
    return (
        <>
            <div id={prop.thread.threadId.toString()} className={"thread-container" + (!prop.focused ? '' : ' thread-focused')}
                 onClick={()=>{navigate(`/thread/${prop.thread.threadId}/page/0`)}}>
                {prop.disableUserElement ?? <UserElement userId={prop.thread.threadOwnerId}/>}
                <div className={"thread"}>
                    <h1 className={'thread-title'}>{prop.thread.threadTitle}</h1>
                    <div className={'tags'}>
                    </div>
                    <div className={"thread-info"}>
                        <p>{prop.thread.threadStatus}</p>
                        <p>Message count: {prop.thread.messageCount}</p>
                    </div>
                    <div className={"thread-info"}>
                        <p>Created: {TimestampFormatter(prop.thread.createdAt)}</p>
                        <Rate className="rate" disabled value={4.51}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreadPreview;