import { handleActions } from 'redux-actions'

const DEFAULT_STATE = {
  list: [
    'Some message',
    'Another Message',
    'Several Messages',
    'Off screen yet?',
    'Nearly or probably',
    'A message that definitely shouldn\'t be visible no matter what you do at least the latter part of this should be hidden.',
    'vastly underestimated the amount of data that could be shown in this log',
    'Probably too many test lines at this point',
  ],
}

export default handleActions({

}, DEFAULT_STATE)