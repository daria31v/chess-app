import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames, Figure } from "./Figure";
import blackLogo from "../../assets/king-black.png";
import whiteLogo from "../../assets/king-white.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
        return false
    };
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDiagonal(target)) return true;
    // const dx = Math.abs(this.cell.x - target.x);
    // const dy = Math.abs(this.cell.y - target.y);
    if (
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }
    if (
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }
    return false;
  }

}
