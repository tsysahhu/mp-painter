import Painter, { PainterElementBaseOption } from "../painter";
import PainterElement from "./paint-element";
import { OmitBaseOption, BorderRadius } from "../value";
import { debug as createDebug } from "debug";
import { createPath } from "../painter-path";

let debug = createDebug("mp-painter:rect-element:");
// debug.enabled = true;

export interface PainterRectagleElementOption extends PainterElementBaseOption {
    type: "rect",
    width: number,
    height: number,
    borderRadius: BorderRadius,
    background: string
}

export class PainterRectagleElement extends PainterElement {
  option: OmitBaseOption<PainterRectagleElementOption>;
  constructor(
    painter: Painter, 
    option: PainterRectagleElementOption,
    parent?: PainterElement
  ){
    super(painter, option, parent);
    this.option = {
      width:        option.width        ??    100,
      height:       option.height       ??    100,
      borderRadius: option.borderRadius ??      0,
      background:   option.background   ?? "#000"
    };
    debug("constructor:", "option.borderRadius=", this.option.borderRadius);
  }
  _layout(){
    debug("layout:", "width=", this.option.width);
    debug("layout:", "height=", this.option.height);
    return {
      width: this.option.width,
      height: this.option.height
    };
  }
  paint(){
    this.option.borderRadius
      ? this.paintByPath()
      : this.paintByFillRect();
  }

  private paintByFillRect(){
    this.painter.setFillStyle(this.option.background);
    this.painter.ctx.fillRect(
      this.painter.upx2px(this.elementX), 
      this.painter.upx2px(this.elementY),
      this.painter.upx2px(this.option.width), 
      this.painter.upx2px(this.option.height)
    );
  }

  private paintByPath(){

    createPath(this, {
      type: "rounded-rect",
      height: this.option.height,
      width: this.option.width,
      borderRadius: this.option.borderRadius
    }).paint();

    this.painter.setFillStyle(this.option.background);
    this.painter.ctx.fill();
  }
}

