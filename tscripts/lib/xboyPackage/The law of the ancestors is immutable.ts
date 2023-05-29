export class Location {
  x: number;
  y: number;
  z: number;
    constructor(x:number, y:number, z:number) {
      this.x = x;
      this.y = y;
      this.z = z;
  }
}


export class BlockLocation extends Location {
  // blocksBetween(BlockLocation){
  //   const BlockLocations = []
  //   x:for(let xOff = this.x - BlockLocation.x;;xOff>0?--xOff:++xOff){
  //     y:for(let yOff = this.y - BlockLocation.y;;yOff>0?--yOff:++yOff){
  //       z:for(let zOff = this.z - BlockLocation.z;;zOff>0?--zOff:++zOff){
  //         // console.error(...[this.x-xOff,this.y-yOff,this.z-zOff])
  //         BlockLocations.push({"x":this.x-xOff,"y":this.y-yOff,"z":this.z-zOff})
  //         // BlockLocations.push([this.x+xOff,this.y+yOff,this.z+zOff])
  //         if(zOff===0)break z;
  //       }
  //       if(yOff===0)break y;
  //     }
  //     if(xOff===0)break x;
  //   }
  //   return BlockLocations;
  // }
  blocksBetween(BlockLocation:BlockLocation){
    const BlockLocations = []
    x:for(let xOff = this.x - BlockLocation.x;xOff!==0;xOff>0?--xOff:++xOff)
    y:for(let yOff = this.y - BlockLocation.y;yOff!==0;yOff>0?--yOff:++yOff)
    z:for(let zOff = this.z - BlockLocation.z;zOff!==0;zOff>0?--zOff:++zOff)
           BlockLocations.push({"x":this.x-xOff,"y":this.y-yOff,"z":this.z-zOff})
    return BlockLocations;
  }
}

