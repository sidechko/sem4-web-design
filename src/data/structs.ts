// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum LoadingState{
    NOT_STARTED,
    LOADING,
    LOADED,
    ERROR,
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum ThreadStatus{
    CLOSED = "CLOSED",
    ACTIVE = "ACTIVE"
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum UserType{
    USER = "USER",
    HELPER = "HELPER",
    MODERATOR = "MODERATOR",
    ADMINISTRATOR = "ADMINISTRATOR",
}

export interface User {
    userId: number,
    username: string | undefined,
    avatar: string | undefined,
    type: UserType
}

export interface Thread {
    threadId: number,
    threadTitle: string | undefined,
    createdAt: number, //epoch
    threadOwnerId: number,
    messageCount: number,
    threadStatus: ThreadStatus,
}

export interface Message {
    messageId: number,
    senderId: number,
    createdAt: number,
    content: string | undefined
}

export interface Message2Thread {
    threadId: number,
    messageId: number
}