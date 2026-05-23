import ThreadPreview from "../../components/thread/threadPreview/ThreadPreview.tsx";

import './ThreadList.css'
import {useEffect, useState} from "react";
import {LoadingState, type Thread} from '../../data/structs.ts'
import testData from "../../data/testData.ts";
import {useNavigate, useParams} from "react-router-dom";
import ListSetting from "../../components/thread/threadListSettings/ListSetting.tsx";
import {Spin} from "antd";

function ThreadList() {

    //Work with path
    const {page = 0} = useParams();
    //Search params
    const searchParams = new URLSearchParams(location.search);
    const urlFocusThread = searchParams.get('focus');
    const focusedThreadId = Number.isNaN(Number(urlFocusThread ?? Number.NaN)) ? -1 : Number(urlFocusThread);
    //States
    const [loaded, setLoaded] = useState<LoadingState>(LoadingState.LOADING);
    const [threads, setThreads] = useState<Thread[]>([]);
    const [perPage, setPerPage] = useState(10);
    const [threadCount, setThreadCount] = useState(0);

    const navigate = useNavigate();
    const navigateFunction = (pageIdx: number) => {
        if (Math.ceil(threadCount / perPage) > pageIdx && pageIdx >= 0) {
            navigate(`/threads/${pageIdx}`);
        }
    }

    const fetchThreads = async (pageIdx: number, count: number) => {
        // await testData.delay(10000)
        if (!Number.isNaN(Number(pageIdx)))
            return testData.threadsInfo.slice(pageIdx * count, (pageIdx + 1) * count);
        return [];
    }

    const fetchThreadCount = async () => {
        return testData.threadsInfo.length;
    }

    useEffect(() => {
        let ignore = false;
        fetchThreadCount()
            .then(res => {
                setThreadCount(res)
            })
        fetchThreads(Number(page), perPage)
            .then(res => {
                if (ignore) return;
                setLoaded(LoadingState.LOADED);
                setThreads(res)
            })
            .catch(() => {
                if (ignore) return;
                setLoaded(LoadingState.ERROR)
            });
        return () => {
            ignore = true;
        }
    }, [page, perPage, threadCount])


    return (
        <>
            <h1>Доступные ветки</h1>
            {
                loaded == LoadingState.LOADED ?
                    <>
                        <ListSetting
                            currentPage={Number(page)}
                            count={threadCount}
                            currentPerPage={perPage}
                            perPageFunction={setPerPage}
                            navigateFunction={navigateFunction}
                        />
                        <section className={'last-thread-holder'}>
                            {
                                threads.map(thread =>
                                    <ThreadPreview
                                        key={thread.threadId}
                                        focused={thread.threadId === focusedThreadId}
                                        thread={thread}/>)
                            }
                        </section>
                        <ListSetting
                            currentPage={Number(page)}
                            count={threadCount}
                            currentPerPage={perPage}
                            perPageFunction={setPerPage}
                            navigateFunction={navigateFunction}
                        />
                    </> :
                    <Spin size="large"/>
            }
        </>
    )
}

export default ThreadList;