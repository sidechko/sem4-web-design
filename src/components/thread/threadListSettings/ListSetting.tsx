import {type ChangeEvent, useEffect, useRef, useState} from "react";
import './ThreadListSetting.css'
import * as React from "react";
import {useQueryParamsState} from "../../../customHooks/useQueryParamsState.ts";

function ListSetting(props: {
    currentPage: number;
    currentPerPage: number;
    count: number,
    perPageFunction: (cnt: number) => void,
    navigateFunction: (pIdx: number) => void
}) {

    const [displayPerPage, setDisplayPerPage] = useQueryParamsState('display', props.currentPerPage);
    const [pageCount, setPageCount] = useState(Math.ceil(props.count / displayPerPage));
    const [threadPerPage, setThreadPerPage] = useState(displayPerPage);
    const [goToPage, setGoToPage] = useState(props.currentPage);
    const [activeInputIdx, setActiveInputIdx] = useState(0);

    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);

    const handleFocusEventThreadPerPage = () => {
        if (isNaN(threadPerPage) === true) return;
        if (threadPerPage === props.currentPerPage && props.currentPerPage === displayPerPage) return;
        setDisplayPerPage(threadPerPage);
        props.perPageFunction(threadPerPage);
    };

    const handleChangeEventThreadPerPage = (e: ChangeEvent<HTMLInputElement>) => {
        setThreadPerPage(Number(e.target.value))
    }

    const handleChangeEventGoToPage = (e: ChangeEvent<HTMLInputElement>) => {
        setGoToPage(Number(e.target.value))
    }

    const handleFocusEventGoToPage = () => {
        setActiveInputIdx(0);
    };

    const handleInputEventGoToPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            let tmpGTP = Number(goToPage);
            if (Number.isNaN(tmpGTP) || tmpGTP > pageCount || tmpGTP < 1)
                tmpGTP = props.currentPage + 1;
            setGoToPage(tmpGTP);
            props.navigateFunction(tmpGTP - 1);
        }
    };

    const holder = async () => {
    }

    useEffect(() => {
        let ignore = false;
        if (
            Number.isNaN(props.currentPage) ||
            props.currentPage < 0 ||
            props.currentPage >= Math.ceil(props.count / props.currentPerPage)) {
            props.navigateFunction(0);
        }
        holder().then(() => {
            if (ignore) return;
            setPageCount(Math.ceil(props.count / props.currentPerPage))
            setDisplayPerPage(props.currentPerPage);
            setThreadPerPage(props.currentPerPage);
        })
        return () => {
            ignore = true;
        }
    }, [props.count, props.currentPage, props.currentPerPage, props, pageCount, activeInputIdx, displayPerPage]);

    return (
        <>
            <section className={'list-settings'}>
                <button className={'accent-clickable'}
                        onClick={() => {
                            props.navigateFunction(props.currentPage - 1)
                        }}>{'<<<'}</button>
                <button className={'accent-clickable'}
                        onClick={() => {
                            props.navigateFunction(props.currentPage + 1)
                        }}>{'>>>'}</button>
                <div className={'page-selector'}>
                    {props.currentPage == 0 ? <></> :
                        <p className={'page-selector-item'} onClick={() => {
                            props.navigateFunction(0)
                        }}>1</p>
                    }
                    {props.currentPage <= 1 ? <></> :
                        <>
                            <input
                                className={'page-selector-item accent-clickable ' + (activeInputIdx == 1 ? 'shown' : 'hidden')}
                                value={goToPage}
                                min={1}
                                max={pageCount}
                                ref={ref1}
                                onKeyUp={handleInputEventGoToPage}
                                onChange={handleChangeEventGoToPage}
                                onBlur={handleFocusEventGoToPage}></input>
                            <p className={(activeInputIdx == 1 ? 'hidden' : 'shown')} onClick={() => {
                                setActiveInputIdx(1)
                                ref1.current?.focus();
                            }}>...</p>
                            <p className={'page-selector-item'} onClick={() => {
                                props.navigateFunction(props.currentPage - 1);
                            }}>{props.currentPage}</p>
                        </>
                    }
                    <p className={'page-selector-item current-page-selector'}>{props.currentPage + 1}</p> {/*Current page*/}
                    {props.currentPage >= pageCount - 2 ? <></> :
                        <>
                            <p className={'page-selector-item'} onClick={() => {
                                props.navigateFunction(props.currentPage + 1)
                            }}>{props.currentPage + 2}</p>

                            <input
                                className={'page-selector-item accent-clickable ' + (activeInputIdx == 2 ? 'shown' : 'hidden')}
                                value={goToPage}
                                min={1}
                                max={pageCount}
                                ref={ref2}
                                onKeyUp={handleInputEventGoToPage}
                                onChange={handleChangeEventGoToPage}
                                onBlur={handleFocusEventGoToPage}></input>
                            <p className={(activeInputIdx == 2 ? 'hidden' : 'shown')} onClick={() => {
                                setActiveInputIdx(2);
                                ref2.current?.focus()
                            }}>...</p>
                        </>
                    }
                    {props.currentPage == pageCount - 1 ? <></> :
                        <p className={'page-selector-item'} onClick={() => {
                            props.navigateFunction(pageCount - 1)
                        }}>{pageCount}</p>
                    }
                </div>
                <input onChange={handleChangeEventThreadPerPage}
                       className={'accent-clickable'}
                       onBlur={handleFocusEventThreadPerPage}
                       value={threadPerPage}></input>
            </section>
        </>
    )
}

export default ListSetting;