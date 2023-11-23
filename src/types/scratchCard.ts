export interface ScratchLayer{
    id:string,
    left_position:number, //圖層的左(x座標)位置
    top_position:number,  //圖層的上(y座標)位置
    width:number, 
    height:number
    layer_img?:string
}
export interface ScartchCard{
    id:string,
    scartch_layers:ScratchLayer[],
    width:number,
    height:number,
    bg_img:string,
}