import {DOWNLOAD_LIMG, RESET_LDOWNLOAD} from "../common"

const initialState = {  
    src: undefined,
    width: undefined ,
    height: undefined,
    x: undefined,
    y: undefined,
    base64: undefined,
}

export const downloadImgLeftReducer = (downloadState = initialState, action) =>{
    switch (action.type) {
        case DOWNLOAD_LIMG:
          return {
            ...downloadState,
            src:  action.payload.src,
            width:  action.payload.width,
            height:  action.payload.height,
            x:  action.payload.x,
            y:  action.payload.y,
            base64:  action.payload.base64,
          };
        case RESET_LDOWNLOAD:
          return{
            ...downloadState,
            src: undefined,
            width: undefined ,
            height: undefined,
            x: undefined,
            y: undefined,
            base64: undefined,            
          }
        default:
          return downloadState;
      }
}