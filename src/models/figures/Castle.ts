import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { FigureNames, Figure } from './Figure';
import blackLogo from '../../assets/castle-black.png';
import whiteLogo from '../../assets/castle-white.png';

export class Castle extends Figure {
    

    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.CASTLE;    
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        if(this.cell.isEmptyVertical(target)) return true;
        if(this.cell.isEmptyHorizontal(target)) return true;
        return false;
    }
}