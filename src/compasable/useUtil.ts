export default function useUtil (){
    function getAssetsFileURL(fileName:string){
        return new URL(`../assets/images/${fileName}`,import.meta.url).href
    }
    return {
        getAssetsFileURL,
    }
}