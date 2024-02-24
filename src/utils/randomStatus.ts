import { Status } from '../store/reservationStore';

export function getRandomStatus() {
  const states = [Status.Success, Status.Error, Status.Success, Status.Success];
  const inx = Math.floor(Math.random() * states.length);
  return states[inx];
}
