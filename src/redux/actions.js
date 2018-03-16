import keys from '../redux/keys';

export function toggle() {
  return {
    type: keys.TOGGLE_MESSAGE
  };
}
