import reducer, * as menu from './Menu'

test('the menu reducer', () => {
  expect(menu.TOGGLE_MENU).toEqual('menu/toggleMenu');

  expect(menu.toggleMenu()).toEqual({type: menu.TOGGLE_MENU});

  let state = reducer(menu.INITIAL_STATE, menu.toggleMenu())
  expect(state.open).toEqual(true);

  state = reducer(state, menu.toggleMenu())
  expect(state.open).toEqual(false);

  state = reducer(state, menu.toggleMenu())
  expect(state.open).toEqual(true);
});
