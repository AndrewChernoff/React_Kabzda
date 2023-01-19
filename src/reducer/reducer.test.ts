import { reducer } from "./reducer"

test('switch collapsed', () => {
    let state: boolean = false
    const newState = reducer(state, {type: 'TOGGLE_COLLAPSE'})

    expect(newState).toBe(true)
})