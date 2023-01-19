const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';

type Action = {
    type: string
  }

export function reducer(state: boolean, action: Action) {
    if (action.type === TOGGLE_COLLAPSE) {
      return !state
    }
    throw Error('Unknown action.');
  }