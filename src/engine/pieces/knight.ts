import Board from '../board'
import Player from '../player'
import { Piece } from './piece'
import Square from '../square'

export class Knight extends Piece {
  constructor(player: Player) {
    super(player)
  }

  getAvailableMoves(_board: Board): Square[] {
    return [] as Square[]
  }
}
