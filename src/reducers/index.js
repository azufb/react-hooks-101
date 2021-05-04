/* actioin = {
    type: 'CREATE_EVENT',
    title: '2021年東京オリンピックのお知らせ',
    body: '開催に関する詳細情報！'
}*/

const events = (state = [], action) => {
    switch(action.type) {
      case 'CREATE_EVENT':
        const event = { title: action.title, body: action.body }
        const length = state.length
        const id = length === 0 ? 1 : state[length - 1].id + 1
        return [...state, { id, ...event }]
      case 'DELETE_EVENT':
        return state
      case 'DELETE_ALL_EVENTS':
        return []
      default:
        return state
    }
  }
  
export default events;