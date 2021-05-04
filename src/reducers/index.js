import React from 'react';

/* actioin = {
    type: 'CREATE_EVENT',
    title: '2021年東京オリンピックのお知らせ',
    body: '開催に関する詳細情報！'
}*/

function events(state = [], action) {
    // stateが未定義の場合に、初期で渡した状態に初期化してくれる。ここでは、[]。
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body };
            const length = state.length;
            const id = length === 0 ? 1 : state[length -1].id+1
            return [...state, { id, ...event }];

        case 'DELETE_EVENT':
            return state;
            
        case 'DELETE_ALL_EVENT':
            return [];
            
        default:
            return state;
    }
}

export default events();