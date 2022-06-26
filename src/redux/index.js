//이 안에 모든 action들의 export 모아둬서 외부에서 import 편하도록 하기
export { addSubscriber, removeSubscriber } from './subscribers/actions'
export { addView } from './views/actions'
export { fetchComments } from './comments/actions'