import { hasRight } from './Firewall'

it('can guess the access right of a given role', () => {
  const roles = {
    "ADMIN": [ "USER" ],
    "USER": [ "ANONYMOUS" ],
    "ANONYMOUS": []
  }

  expect(hasRight('ADMIN', 'ANONYMOUS', roles)).toBe(true)
  expect(hasRight('USER', 'ANONYMOUS', roles)).toBe(true)
  expect(hasRight('USER', 'ADMIN', roles)).toBe(false)
  expect(hasRight('ANONYMOUS', 'ADMIN', roles)).toBe(false)
  expect(hasRight('PLOP', 'FOO', roles)).toBe(false)
  expect(hasRight('PLOP', 'PLOP', roles)).toBe(false)
});
