import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { FigureNames, Figure } from './Figure';
import blackLogo from '../../assets/king-black.png';
import whiteLogo from '../../assets/king-white.png';

export class King extends Figure {
    
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;    
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return true;
    }
}