import {type ChangeEvent, useEffect, useState} from "react";
import './ThreadListSetting.css'

function ThreadListSetting(props: {
    threadCount: number,
    currentThreadPerPage: number,
    threadPerPageFunction: (cnt: number)=>void,
    navigateFunction: (pIdx: number, force: boolean) => void
}) {

    const [pageCount, setPageCount] = useState(Math.ceil(props.threadCount / props.currentThreadPerPage));
    const [threadPerPage, setThreadPerPage] = useState(props.currentThreadPerPage);

    const handleFocusEvent = () => {
        if(isNaN(threadPerPage) === true) return;
        if(threadPerPage === props.currentThreadPerPage) return;
        props.threadPerPageFunction(threadPerPage);
    };

    const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setThreadPerPage(Number(e.target.value))
    }

    const holder = async () => {}

    useEffect(() => {
        let ignore = false;
        holder().then(()=> {
            if (ignore) return;
            setPageCount(Math.ceil(props.threadCount / props.currentThreadPerPage))
            setThreadPerPage(props.currentThreadPerPage);
        })
        return () => {
            ignore = true;
        }
    }, [props.threadCount, props.currentThreadPerPage]);

    return (
        <>
            <section className={'listSettings'}>
                <div className={'selectPage'}>
                    <button onClick={()=>{
                        props.navigateFunction(-1,false)
                    }}>{'<<<'}</button>
                    <button onClick={()=>{
                        props.navigateFunction(1,false)
                    }}>{'>>>'}</button>
                </div>
                <div className={'pagePer'}>
                    <input onChange={handleChangeEvent} onBlur={handleFocusEvent} value={threadPerPage} ></input>
                </div>
            </section>
        </>
    )
}

export default ThreadListSetting;