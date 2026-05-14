import ThreadPreview from "../../components/thread/threadPreview/ThreadPreview.tsx";

import './ThreadList.css'
import {useEffect, useState} from "react";
import {LoadingState, type Thread} from '../../data/structs.ts'
import testData from "../../data/testData.ts";
import {useNavigate, useParams} from "react-router-dom";
import ThreadListSetting from "../../components/thread/threadListSettings/ThreadListSetting.tsx";

function ThreadList(prop: { threadType: string, name: string }) {
    const [loaded, setLoaded] = useState<LoadingState>(LoadingState.LOADING);
    const [threads, setThreads] = useState<Thread[]>([]);
    const [perPage, setPerPage] = useState(2);
    const [threadCount, setThreadCount] = useState(0);
    const params = useParams();
    const navigate = useNavigate();

    const fetchThread = async (pageIdxStr: string | undefined, count: number) => {
        const pageIdx = pageIdxStr == undefined ? 0 : Number(pageIdxStr);
        return testData.threadsInfo.slice(pageIdx * count, (pageIdx + 1) * count);
    }

    const fetchThreadCount = async () => {
        return testData.threadsInfo.length;
    }

    useEffect(() => {
        let ignore = false;
        fetchThread(params.page, perPage)
            .then(res => {
                if (ignore) return;
                setLoaded(LoadingState.LOADED);
                setThreads(res)
            })
            .catch(() => {
                if (ignore) return;
                setLoaded(LoadingState.ERROR)
            });
        fetchThreadCount()
            .then(res => {
                setThreadCount(res)
            })
        return () => {
            ignore = true;
        }
    }, [params.page, perPage, threadCount])



    return (
        <>
            <h1>Треды: {prop.name}</h1>
            <ThreadListSetting
                threadCount={threadCount}
                currentThreadPerPage={perPage}
                threadPerPageFunction={(count: number) => {setPerPage(count)}}
                navigateFunction={(pIdx:number, force: boolean) => {
                    const finPage = force ? pIdx : Number(params.page) + pIdx;
                    navigate(`/threads/${prop.threadType}/${finPage}`);
                }}
            />
            <section className={'lastThreadHolder'}>
                {threads.map(thread => <ThreadPreview key={thread.threadId} thread={thread}/>)}
            </section>
            <ThreadListSetting
                threadCount={threadCount}
                currentThreadPerPage={perPage}
                threadPerPageFunction={(count: number) => {setPerPage(count)}}
                navigateFunction={(pIdx:number, force: boolean) => {
                    const finPage = force ? pIdx : Number(params.page) + pIdx;
                    navigate(`/threads/${prop.threadType}/${finPage}`);
                }}
            />
        </>
    )
}

export default ThreadList;