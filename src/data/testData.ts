import {type Message, type Message2Thread, type Thread, ThreadStatus, type User, UserType} from './structs.ts'

const testUserShortData : User = {
    userId: 0,
    username: 's1pepega',
    avatar: location.hostname !== 'localhost' ?
        'https://avatars.githubusercontent.com/u/44977883?v=4' :
        '/sem4-web-design/src/assets/pepega-eng.png',
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
        content:`\n# Тестовое сообщение\n
            \n## Демонстрация преимуществ Markdown\n
            \n### Заголовки, текст разного размера\n
            \n![](https://avatars.mds.yandex.net/i?id=0cd86ec894a8a09d30e594a89fe2b047510d222c-5179350-images-thumbs&n=13)\n
            \n![](https://avatars.mds.yandex.net/i?id=0cd86ec894a8a09d30e594a89fe2b047510d222c-5179350-images-thumbs&n=13)\n
            \n#### Возможность использовать плагины\n
            \nИспользование списков\n
            \n- [x] Finish my changes\n
            \n- [ ] Push my commits to GitHub\n
            \n- [ ] Open a pull request\n
            \n- [x] @mentions, #refs, [links](), **formatting**, and del supported\n
            \n- [x] list syntax required (any unordered or ordered list supported)\n
            \n- [x] this is a complete item\n
            \n- [ ] this is an incomplete item\n
            \nИспользование математических выражений\n
            \n$$ x^2 + y^2 = z^2 $$\n
            \nДа и в целом, огромный потенциал. Это единственное сообщение, которое содержит отличный текст, для демонстрации работы...\n`
    },
    {
        messageId: 2,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 3,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 4,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 5,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 6,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 7,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 8,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 9,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 10,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 11,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 12,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 13,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 14,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 15,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 16,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 17,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 18,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 19,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 20,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 21,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 22,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 23,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
    },
    {
        messageId: 24,
        senderId: 0,
        createdAt: 1778398328,
        content: 'HELLO WORLD'
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
    {threadId: 0, messageId: 1},
    {threadId: 0, messageId: 2},
    {threadId: 0, messageId: 3},
    {threadId: 1, messageId: 4},
    {threadId: 1, messageId: 5},
    {threadId: 1, messageId: 6},
    {threadId: 2, messageId: 7},
    {threadId: 2, messageId: 8},
    {threadId: 2, messageId: 9},
    {threadId: 3, messageId: 10},
    {threadId: 3, messageId: 11},
    {threadId: 3, messageId: 12},
    {threadId: 4, messageId: 13},
    {threadId: 4, messageId: 14},
    {threadId: 4, messageId: 15},
    {threadId: 5, messageId: 16},
    {threadId: 5, messageId: 17},
    {threadId: 5, messageId: 18},
    {threadId: 6, messageId: 19},
    {threadId: 6, messageId: 20},
    {threadId: 6, messageId: 21},
    {threadId: 7, messageId: 22},
    {threadId: 7, messageId: 23},
    {threadId: 7, messageId: 24},
    {threadId: 8, messageId: 1},
    {threadId: 8, messageId: 2},
    {threadId: 8, messageId: 3},
]

let nextMessageId: number = 24;
function postMessage(threadId: number, messageText: string) {
    const newMessage : Message = {
        messageId: ++nextMessageId,
        senderId: 0,
        createdAt: Date.now(),
        content: messageText
    }
    const newM2T: Message2Thread = {
        threadId: threadId,
        messageId: newMessage.messageId,
    }
    message2Thread.push(newM2T)
    messagesData.push(newMessage)
}

function getThreadMessages(threadId: number, from: number, to: number) {
    const messagesIds: number[] = message2Thread
        .filter(m2t => {return m2t.threadId === threadId})
        .map(m => m.messageId)
        .slice(from, to)
    return messagesData.filter(m=>messagesIds.includes(m.messageId))
}

function getThreadMessagesCount(thread: Thread) : number {
    return  message2Thread.filter(m2t => {return m2t.threadId === thread.threadId}).length
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

export default {testThreadDemoData, testMessageData, testUserShortData, messagesData, threadsInfo, message2Thread, delay, getSender, getThreadMessages, getThreadMessagesCount, postMessage};