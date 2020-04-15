class ItoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputColor = $('#color');
        this._inputBrand = $('#brand');
        this._inputHinban = $('#hinban');

        this._itoList = new ItoList();
        this._itoListView = new ItoListView($('.ito-table'));
    }

    //糸を追加する
    addIto(event){

        event.preventDefault();
    
        //入力チェック
        //ture:処理続行
        //false:処理を中断
        
        if(this._isValidInput() == true){
 
            //値を保存する
            let ito = new Ito(
                this._inputColor.value,
                this._inputBrand.value,
                this._inputHinban.value
            );

            this._itoList.addItem(ito);

            console.log(this._itoList);
        
            this._itoListView.update(ito);

            this._formSetDefault();
        }

    }

    //糸をすべて削除する
    clearIto(event){
        event.preventDefault();
    
        this._itoList.clear();
    
        this._itoListView.clear();
    
        this._formSetDefault();
    }

    //糸を一つ削除する
    deleteIto(){
        //画面から削除

        //糸リストから消す
        this._itoList.selectClear();
    }

    //入力欄を初期値に戻す処理
    _formSetDefault(){

        //色を黒にする
        this._inputColor.value = '#000000';
        //メーカー名を空文字にする
        this._inputBrand.value = '';
        //品番を空文字にする
        this._inputHinban.value = '';

    }
    
    //糸のバリデーションをする
    //入力が不正の場合　＝　false,そうでない場合　＝　true
    //trueになる条件：メーカー名　＆＆　品番が空文字ではない
    //falseになる条件：メーカー名　｜｜　品番が空文字

    _isValidInput(){        /*is は true falseの戻り値がある*/
        //結果
        let valid = false;
        
        //メーカー名が空文字ではない
        if(this._inputBrand.value != '' && this._inputHinban.value != ''){
        //品番が空文字ではない

            valid = true;
        }
        
        //valid =!~&&!~

        //結果を教える
        return valid;
    }
}