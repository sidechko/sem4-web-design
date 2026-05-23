import {useEffect, useState} from "react";
import {LoadingState, type User} from "../../data/structs.ts";
import testData from "../../data/testData.ts";
import NotFoundSvg from "../../assets/not_found.svg?react";
import {Spin} from "antd";
import './UserElement.css';


function UserElement(props: {
    userId: number;
}) {
    const [threadOwner, setThreadOwner] = useState<User | null>(null);
    const [loaded, setLoaded] = useState<LoadingState>(LoadingState.LOADING);

    const fetchUser = async function (userId: number) {
        return testData.getSender(userId);
    }

    useEffect(() => {
        let ignore = false;
        fetchUser(props.userId)
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
    }, [props.userId])

    const getUserElement = () => {
        switch (loaded) {
            case LoadingState.LOADED:
                if (threadOwner === null) break;
                return <div className={"owner-short-info"}>
                    <img className={"avatar"} src={threadOwner.avatar}/>
                    <p className={"username"}>{threadOwner.username}</p>
                    <p className={"username"}>{threadOwner.type}</p>
                </div>;
            case LoadingState.ERROR:
                return <div className={"owner-short-info"}>
                    <NotFoundSvg className={"avatar"}/>
                    <p className={"username"}>not-found-user</p>
                    <p className={"username"}>EMPTY</p>
                </div>
            default:
                return <div className={"owner-short-info"}>
                    <Spin className={'avatar'}/>
                    <p className={"username"}>LOADING</p>
                    <p className={"username"}>...</p>
                </div>
        }
    }

    return getUserElement()
}

export default UserElement;