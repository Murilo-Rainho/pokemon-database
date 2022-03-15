import IMovement from './IMovement';

interface MovementRequest extends IMovement{
  typeId: string;
}

export default MovementRequest;
