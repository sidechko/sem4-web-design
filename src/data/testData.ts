import {type Message, type Message2Thread, type Thread, ThreadStatus, type User, UserType} from './structs.ts'

const testUserShortData : User = {
    userId: 0,
    username: 's1pepega',
    avatar: '/src/assets/pepega-eng.png',
    type: UserType.USER
}
const testMessageData : Message = {
    messageId: 0,
    senderId: 0,
    createdAt: 1778398328,
    content: '- [x] Finish my changes\n' +
        '- [ ] Push my commits to GitHub\n' +
        '- [ ] Open a pull request\n' +
        '- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported\n' +
        '- [x] list syntax required (any unordered or ordered list supported)\n' +
        '- [x] this is a complete item\n' +
        '- [ ] this is an incomplete item',
}
const testThreadDemoData : Thread = {
    threadId: 0,
    threadTitle: "Thread Title. Starshine thread demo info.",
    createdAt: 1778398328, //epoch
    threadOwnerId: 0,
    messageCount: 1,
    threadStatus: ThreadStatus.CLOSED
}

const messagesData : Message[] = [
    {
        messageId: 1,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 2,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 3,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 4,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 5,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 6,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 7,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 8,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 9,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 10,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 11,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 12,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 13,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 14,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 15,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 16,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 17,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 18,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 19,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 20,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 21,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 22,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 23,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
    {
        messageId: 24,
        senderId: 0,
        createdAt: 1778398328,
        content: ' '
    },
]
const threadsInfo : Thread[] = [
    {
        threadId: 0,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778398328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 1,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778406328, //epoch
        threadOwnerId: 1,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 2,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778414328, //epoch
        threadOwnerId: 3,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 3,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778422328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 4,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778430328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 5,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778438328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 6,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778446328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 7,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778454328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    },
    {
        threadId: 8,
        threadTitle: "Thread Title. Starshine thread demo info.",
        createdAt: 1778462328, //epoch
        threadOwnerId: 0,
        messageCount: 1,
        threadStatus: ThreadStatus.CLOSED,
    }
]
const message2Thread : Message2Thread[] = [
    {threadId: 1, messageId: 1},
    {threadId: 1, messageId: 2},
    {threadId: 1, messageId: 3},
    {threadId: 2, messageId: 4},
    {threadId: 2, messageId: 5},
    {threadId: 2, messageId: 6},
    {threadId: 3, messageId: 7},
    {threadId: 3, messageId: 8},
    {threadId: 3, messageId: 9},
    {threadId: 4, messageId: 10},
    {threadId: 4, messageId: 11},
    {threadId: 4, messageId: 12},
    {threadId: 5, messageId: 13},
    {threadId: 5, messageId: 14},
    {threadId: 5, messageId: 15},
    {threadId: 6, messageId: 16},
    {threadId: 6, messageId: 17},
    {threadId: 6, messageId: 18},
    {threadId: 7, messageId: 19},
    {threadId: 7, messageId: 20},
    {threadId: 7, messageId: 21},
    {threadId: 8, messageId: 22},
    {threadId: 8, messageId: 23},
    {threadId: 8, messageId: 24},
]

function getThreadMessages(thread: Thread) : Message[] {
    const messagesIds: number[] = message2Thread
        .filter(m2t => {return m2t.threadId === thread.threadId})
        .map(m => m.messageId)
    return messagesData.filter(m=>{return m.messageId in messagesIds})
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function getSender(senderId: number) {
    if(senderId == 0) {
        return testUserShortData
    }
    else{
        await delay(10000)
        return testUserShortData
    }
}

export default {testThreadDemoData, testMessageData, testUserShortData, messagesData, threadsInfo, message2Thread, getSender, getThreadMessages};