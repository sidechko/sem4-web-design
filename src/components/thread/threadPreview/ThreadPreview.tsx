import {useEffect, useState} from "react";
import TimestampFormatter from "../../../data/TimestampFormatter.ts";
import './ThreadPreview.css';
import {Rate, Spin} from 'antd';
import {LoadingState, type Thread, type User} from "../../../data/structs.ts";
import testData from "../../../data/testData.ts";
import NotFoundSvg from "../../../assets/not_found.svg?react";

function ThreadPreview(prop: { thread: Thread }) {
    const [threadOwner, setThreadOwner] = useState<User | null>(null);
    const [loaded, setLoaded] = useState<LoadingState>(LoadingState.LOADING);

    const fetchUser = async function (userId: number) {
        return testData.getSender(userId);
    }

    useEffect(() => {
        let ignore = false;
        fetchUser(prop.thread.threadOwnerId)
            .then(res => {
                if(ignore) return;
                setLoaded(LoadingState.LOADED)
                if (res === null) {
                    setLoaded(LoadingState.ERROR)
                    return;
                }
                setThreadOwner(res)
            })
            .catch(reason => {
                if(ignore) return;
                console.log(reason)
                setLoaded(LoadingState.ERROR)
            })
        return () => {
            ignore = true;
        }
    }, [prop.thread.threadOwnerId])

    const getUserElement = () => {
        switch (loaded) {
            case LoadingState.LOADED:
                if (threadOwner === null) break;
                return <div className={"ownerSI"}>
                    <img className={"avatar"} src={threadOwner.avatar}/>
                    <p className={"username"}>{threadOwner.username}</p>
                    <p className={"username"}>{threadOwner.type}</p>
                </div>;
            case LoadingState.ERROR:
                return <div className={"ownerSI"}>
                    <NotFoundSvg className={"avatar"}/>
                    <p className={"username"}>not-found-user</p>
                </div>
            default:
                return <div className={"ownerSI"}>
                    <Spin/>
                </div>
        }
    }

    return (
        <>
            <div className={"threadContainer"}>
                {getUserElement()}
                <div className={"thread"}>
                    <h1 className={'threadTitle'}>{prop.thread.threadTitle}</h1>
                    <div className={'tags'}>
                    </div>
                    <div className={"threadInfo"}>
                        <p>{prop.thread.threadStatus}</p>
                        <p>Message count: {prop.thread.messageCount}</p>
                    </div>
                    <div className={"threadInfo"}>
                        <p>Created: {TimestampFormatter(prop.thread.createdAt)}</p>
                        <Rate className="rate" disabled value={4.51}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreadPreview;