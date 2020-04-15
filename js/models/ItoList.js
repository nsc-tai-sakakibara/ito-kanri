class ItoList{

    constructor(){
        this._list = [];
    }

    get list(){
        return [].concat(this._list);
    }

    //糸のリストの最後に新しく追加する
    addItem(ito){
        this._list.push(ito);
    }

    //糸のリストクリア
    clear(){
        this._list = [];
    }

    //指定された糸を削除する
    seleceClear(ito){
        //this._listあなたはitoを持っていますか
        //this._list,itoを削除してください
        
        let itemIndex = -1;
        for(let index = 0;index < this._list.length; index++){
            if(JSON.stringify(ito) == JSON.stringify(this._list[index])){
                itemIndex = index;
                break;
            }
        }

        if(itemIndex >= 0){
            this._list.splice(itemIndex,1);/*指定された糸ではなく内容の同じものを削除？*/
        }
    }
}