import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {LoadingState, type Message, type Thread} from "../../data/structs.ts";
import NotFoundError from "../../data/errors.ts";
import testData from "../../data/testData.ts";
import {Spin} from "antd";
import ThreadPreview from "../../components/thread/threadPreview/ThreadPreview.tsx";
import ThreadMessage from "../../components/thread/threadMessage/ThreadMessage.tsx";
import ListSetting from "../../components/thread/threadListSettings/ListSetting.tsx";
import MessageInputBox from "../../components/thread/messageInputBox/MessageInputBox.tsx";
import './ThreadView.css';

function ThreadView() {

    const [loadedThread, setLoadedThread] = useState<LoadingState>(LoadingState.LOADING);
    const [loadedMessages, setLoadedMessages] = useState<LoadingState>(LoadingState.LOADING);
    const [thread, setThread] = useState<Thread | null>(null);
    const [perPage, setPerPage] = useState(20);
    const [messageCount, setMessageCount] = useState(0);
    const [messages, setMessages] = useState<Message[]>([]);

    const navigate = useNavigate();
    const {id = undefined, page = undefined} = useParams();

    const navigateFunction = (pageIdx: number) => {
        if (Math.ceil(messageCount / perPage) > pageIdx && pageIdx >= 0) {
            navigate(`/thread/${id}/page/${pageIdx}`);
        }
    }

    const fetchMessages = async (thread: Thread, pageIdx: number, count: number) => {
        if (!Number.isNaN(Number(pageIdx))) {
            return testData.getThreadMessages(thread.threadId, pageIdx * count, (pageIdx + 1) * count)
        }
        return []
    }

    const postMessage = async (message: string) => {
        if(thread !== null)
            testData.postMessage(thread.threadId, message)
    }

    const fetchMessagesCount = async (thread: Thread) => {
        return testData.getThreadMessagesCount(thread);
    }

    const fetchThread = async (threadIdStr: string | undefined) => {
        const threadId = Number(threadIdStr);
        if (Number.isNaN(threadId))
            throw new NotFoundError('not found thread with ID ' + threadId);
        const thr = testData.threadsInfo.filter(thread => thread.threadId === threadId).pop()
        if (thr === undefined)
            throw new NotFoundError('not found thread with ID ' + threadId);
        return thr;
    }

    useEffect(() => {
        let ignore = false;
        console.log('useEffect');
        const intervalFetch = setInterval(()=>{
            console.log('intervalFetch');
            if(thread == null){
                clearInterval(intervalFetch)
                return
            }
            fetchMessagesCount(thread)
                .then((res)=>{
                    if(res === messageCount)
                        return
                    setMessageCount(res)
                    fetchMessages(thread, Number(page), perPage)
                        .then(setMessages)
                })
        }, 1000)
        fetchThread(id)
            .then((thread) => {
                if (ignore) return;
                setLoadedThread(LoadingState.LOADED);
                setThread(thread);
                if (Number.isNaN(Number(page))) return;
                fetchMessagesCount(thread)
                    .then((res) => {setMessageCount(res)})
                    .catch();
                fetchMessages(thread, Number(page), perPage)
                    .then(messages => {
                        setLoadedMessages(LoadingState.LOADED)
                        setMessages(messages)
                    })
                    .catch(() => {
                        setLoadedThread(LoadingState.ERROR);
                    })
            })
            .catch(() => {
                if (ignore) return;
                navigate(`/not-found-thread-with-id=${id}`);
            })
        return () => {
            ignore = true;
            clearInterval(intervalFetch);
        }
    }, [id, page, perPage, navigate, thread, messageCount])

    return (
        <section className={'thread-view'}>
            {loadedThread == LoadingState.LOADING ? <Spin/> : thread == null ? <></> :
                <ThreadPreview disableUserElement thread={thread}/>}
            <section className={'messages-holder'}>
                {loadedMessages == LoadingState.LOADING
                    ? <Spin/>
                    : loadedMessages == LoadingState.ERROR
                        ? <h1>Messages not found</h1>
                        : messages.map(message => {
                            return <ThreadMessage key={message.messageId} message={message}/>
                        })
                }
            </section>
            <ListSetting
                currentPage={Number(page)}
                count={messageCount}
                currentPerPage={perPage}
                perPageFunction={setPerPage}
                navigateFunction={navigateFunction}
            />
            <MessageInputBox postMessage={postMessage}/>
        </section>
    )
}

export default ThreadView;