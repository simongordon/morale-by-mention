import { getRandom, postMention } from './externalUrls'; 

export const getRandomUser = () => {
    return fetch(getRandom, { headers: { 'Content-Type': 'application/json' }
    }).then(user => user.json());
}

export const postMessage = (user, message) => {
    const body = {
        message,
        user_ids: [user.id],
    }
    return fetch(postMention, {
        method: 'POST', 
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(message => message.json())
}