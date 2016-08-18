// This is a JavaScript file
//↓本番
var ncmb = new NCMB("bb0194930176053bea3ec03024dc1962234cb96d0b372352234b17e25f525a9e","8960c3d8602554b25f6eb59a117ac883ee26a245eaab5553eecd610eea450ba0");
//↓テスト
//var ncmb = new NCMB("15c1b1aa62fb0128a2b013dd7480250f71e00a80177d53e1cab99457a7dab5a4","85490ef92f820b634523453cc9353ea8068faec84ef3894c6cb1a193bfcdb7f1");
        // バージョン //
        const VERSION = "0.70.05.01"

        // ゲーム数、人数 //
        const GAME_WIN_POINT = 4;
        const GAME_MAX = (GAME_WIN_POINT*2)-1;
        const PLAYER_MAX = 4;
    
        // 列定義 //
        const CLM_NAME = 0;
    	const CLM_ID = 1;
		const CLM_SERVE = 2;
		const CLM_GAME_1st = 3;
		const CLM_SCORE_UP = 10;
		const CLM_SCORE_DN = 8;

		const CLM_GAME_1st_atGAMeROW = 1;  // ゲーム行の列 //

		// 行定義 //
		const ROW_TITLE = 0;
		const ROW_MEM_1st = 1;
		const ROW_MEM_2nd = 2;
		const ROW_GAME_UP = 3;
		const ROW_GAME_DN = 4;
		const ROW_MEM_3rd = 5;
		const ROW_MEM_4th = 6;
		const ROW_NA = 7;		// 該当なし //

		// 色定義 //
		const COLOR_INVALID_CELL = "#BBB";
		const COLOR_NORMAL_CELL = "#fff";
		const COLOR_WARNING_CELL = "#ff8";

		// モード //
		const INPUT_MODE_NORMAL = 0;
		const INPUT_MODE_SERVE = 1;
		var inputMode = INPUT_MODE_NORMAL;
		
		// ゲーム数 //
		var gameResult;
			const GAME_RESULT_EMPTY = 0;
			const GAME_RESULT_UP = 1;
			const GAME_RESULT_DN = 2;
        
//--------------------------------------------------//
// バージョン表示　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
document.write( "version = " + VERSION);

//--------------------------------------------------//
// 初期化処理	　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
var regMem;         // regular member

window.onload = function(){
        regMem = new Array();

    change_bkColor();
	gameResult = new Array(GAME_RESULT_EMPTY,GAME_RESULT_EMPTY,GAME_RESULT_EMPTY,GAME_RESULT_EMPTY,GAME_RESULT_EMPTY,GAME_RESULT_EMPTY,GAME_RESULT_EMPTY);
	fixDate_init();
        
    regMem[0] = new set_regMem(1,"岩井","いわい");
	regMem[1] = new set_regMem(2,"大谷","おおたに");
	regMem[2] = new set_regMem(6,"木村","きむら");
	regMem[3] = new set_regMem(10,"住野","すみの");
	regMem[4] = new set_regMem(13,"中川","なかがわ");
	regMem[5] = new set_regMem(17,"野上","のがみ");
	regMem[6] = new set_regMem(18,"長谷川","はせがわ");
	regMem[7] = new set_regMem(22,"前田","まえだ");
	regMem[8] = new set_regMem(27,"矢澤","やざわ");
	regMem[9] = new set_regMem(29,"山本修","やまもと");
	regMem[10] = new set_regMem(31,"吉川","よしかわ");
	regMem[11] = new set_regMem(32,"和田","わだ");
	regMem[12] = new set_regMem(34,"大藤","おおふじ");
	regMem[13] = new set_regMem(39,"濱田","はまだ");
	regMem[14] = new set_regMem(40,"志水","しみず");
	regMem[15] = new set_regMem(48,"中前","なかまえ");
	regMem[16] = new set_regMem(49,"高橋","たかはし");
	regMem[17] = new set_regMem(50,"田村","たむら");
	regMem[18] = new set_regMem(52,"板倉","いたくら");
	regMem[19] = new set_regMem(53,"上村","うえむら");
	regMem[20] = new set_regMem(55,"榊","さかき");
	regMem[21] = new set_regMem(62,"清見","きよみ");
	regMem[22] = new set_regMem(63,"小嶋","こじま");
	regMem[23] = new set_regMem(64,"古川","ふるかわ");
	regMem[24] = new set_regMem(67,"栄里子","えり");
	regMem[25] = new set_regMem(72,"植田","うえだ");
	regMem[26] = new set_regMem(73,"一柳","いちりゅう");
	regMem[27] = new set_regMem(74,"徳武","とくたけ");
	regMem[28] = new set_regMem(75,"疋田","ひきだ");
	regMem[29] = new set_regMem(76,"名越","なごし");
	regMem[30] = new set_regMem(77,"宮田","みやた");
	regMem[31] = new set_regMem(78,"ひろみ","ひろみ");
	regMem[32] = new set_regMem(79,"キム","きむ");
	regMem[33] = new set_regMem(80,"福山","ふくやま");
	regMem[34] = new set_regMem(82,"片山","かたやま");
	regMem[35] = new set_regMem(84,"宮脇","みやわき");
	regMem[36] = new set_regMem(85,"大朝","おおとも");
	regMem[37] = new set_regMem(87,"浪江","なみえ");
	regMem[38] = new set_regMem(88,"齊藤","さいとう");
	regMem[39] = new set_regMem(89,"日高","ひだか");
	regMem[40] = new set_regMem(90,"田熊","たぐま");
	regMem[41] = new set_regMem(91,"井関","いせき");
	regMem[42] = new set_regMem(100,"角コーチ","すみ");
	regMem[43] = new set_regMem(149,"菊池","きくち");
	regMem[44] = new set_regMem(165,"大勝","おおかつ");
	regMem[45] = new set_regMem(177,"古田","ふるた");
	regMem[46] = new set_regMem(277,"南木","なんぼく");
	regMem[47] = new set_regMem(281,"西崎","にしざき");
    regMem[48] = new set_regMem(296,"大川","おおかわ");
    regMem[49] = new set_regMem(297,"平岡","ひらおか");
    regMem[50] = new set_regMem(66,"荒本","あらもと");
    regMem[51] = new set_regMem(298,"飯田","いいだ");
    regMem[52] = new set_regMem(299,"宮本","みやもと");
    regMem[53] = new set_regMem(300,"松下","まつした");
    regMem[54] = new set_regMem(301,"大朝J","おおともじ");
    regMem[55] = new set_regMem(302,"澤田","さわだ");
}

function set_regMem(id, dispName, nickname){       //
    this.id = id;
    this.dispName = dispName;
    this.nickname = nickname;
}




//--------------------------------------------------//
// 名前入力		　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
function Click_Name(Obj){
	var Member = ncmb.DataStore("member");
	var row = Obj.parentNode.rowIndex;
	var col = Obj.cellIndex;
	var strName = Obj.textContent;
	var personNum = get_person_number(row)+1;
//			  var subquery1 = Member.equalTo("name", strName);
////			var subquery2 = Member.equalTo("nickname1", strName);
////			var subquery3 = Member.equalTo("nickname2", strName);
//			  var subquery2 = equalTo("nickname1", strName);
//			  var subquery3 = equalTo("nickname2", strName);

	if(Chk_EnaCell(row, col)==false){
		return;
	}

	strName = prompt(personNum + "番目の名前入力", strName);

	if( strName == null ){
		// キャンセル押下時
		strName = Obj.textContent;
	}
	Obj.textContent = strName;
	
    if(chk_strEmpty(strName) == false){
        var numID = get_IDfromTbl(strName);
//	  Member  .or(subquery3,subquery2)		//★ or構文

        if(numID!=null){
            document.getElementById('TBL').rows[row].cells[CLM_ID].textContent = numID;
            document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent = get_NameFromTbl(numID);
        }else{

		    Member	
                .equalTo("nickname1", strName)
				.fetchAll()
				.then(function(results){
					//★ 該当なし時の表示クリア処理
					document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent = results[0].dispName
					document.getElementById('TBL').rows[row].cells[CLM_ID].textContent = results[0].ID
				})
				.catch(function(err){
					alert("該当の名前がありません"+err)
				})
        }
	}
	
}

// 名前入力からIDを取得 （内部テーブルから）
function get_IDfromTbl(strName){
    var i;
    var retID = null;
    
    for(i in regMem){
        if((regMem[i].dispName == strName) || (regMem[i].nickname == strName)){
            retID = regMem[i].id;
            break;
        }
    }
    
    return retID;
}



//--------------------------------------------------//
// ID入力		　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//

function Click_ID( Obj ){
	var Member = ncmb.DataStore("member");
	var row = Obj.parentNode.rowIndex;
	var col = Obj.cellIndex;
	var idNum = Obj.textContent;
	var personNum = get_person_number(row)+1;

	if(Chk_EnaCell(row, col)==false){
		return;
	}

	idNum = prompt(personNum + "番目のID入力",idNum);
	if( idNum == null ){
		// キャンセル押下 //
		idNum = Obj.textContent;
	}
	Obj.textContent = idNum;
    if(chk_strEmpty(idNum) == false){
        
        var strName = get_NameFromTbl(+idNum);
        
        if(strName!=null){
            document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent = strName;
        }else{
        
		    Member
                .equalTo("ID", +idNum)
				.fetchAll()
				.then(function(results){
					object = results[0];

                    if(object.length != 0){
    					document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent = object.name
                    }else{
                        alert("該当IDがありません");
        				document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent = ""
                    }

//					  ID_paint(row)
				})
				.catch(function(err){
					alert("該当IDがありません"+err);
//					  ID_paint(row)
        			document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent = ""
				})
        }
	}
}

// IDから名前の取得（内部テーブルから）
function get_NameFromTbl(idNum){
    var i;
    var retStr = null;
    
    for(i in regMem){
        if(regMem[i].id == idNum){
            retStr = regMem[i].dispName;
            break;
        }
    }
    
    return retStr;
}
// ID枠塗りつぶし ★
function ID_paint(row){
	var thisCell = document.getElementById('TBL');
	if( chk_strEmpty(thisCell.rows[row].cells[CLM_ID].textContent) == false){
		thisCell.rows[row].cells[CLM_ID].style.backgroundColor = COLOR_NORMAL_CELL;
	alert("OH_true" + thisCell.rows[row].cells[CLM_ID].textContent)
	}else{
		thisCell.rows[row].cells[CLM_ID].backgroundColor = COLOR_WARNING_CELL;
	alert("OH_false" + thisCell.rows[row].cells[CLM_ID].textContent)
	}
}

//--------------------------------------------------//
// サーブ順 処理　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
// 変数宣言 //
var serveMode;						// サーブモード //
	const SERVE_MODE_EMP = 0;		// サーブ順全空白状態 //
	const SERVE_MODE_FIX_1st = 1;	// 1番目確定状態 //
// サーブ順変更開始 //
function click_serve(){
	if( confirm('サーブの順番を変更しますか？') ){
		inputMode = INPUT_MODE_SERVE;
		serveMode = SERVE_MODE_EMP;
		// サーブエリアクリア //
		del_serveArea();


		// 順番クリア //
		document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_SERVE].textContent = "";
		document.getElementById('TBL').rows[ROW_MEM_2nd].cells[CLM_SERVE].textContent = "";
		document.getElementById('TBL').rows[ROW_MEM_3rd].cells[CLM_SERVE].textContent = "";
		document.getElementById('TBL').rows[ROW_MEM_4th].cells[CLM_SERVE].textContent = "";
		
		change_bkColor();	// 背景色変更 //
		
	}
}

// サーブ順変更 //
function chg_serve_turn(row){
	if( inputMode == INPUT_MODE_SERVE ){
		var player1 = document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_SERVE];
		var player2 = document.getElementById('TBL').rows[ROW_MEM_2nd].cells[CLM_SERVE];
		var player3 = document.getElementById('TBL').rows[ROW_MEM_3rd].cells[CLM_SERVE];
		var player4 = document.getElementById('TBL').rows[ROW_MEM_4th].cells[CLM_SERVE];
		if( serveMode == SERVE_MODE_EMP ){
			// 1番目選択 //
			document.getElementById('TBL').rows[row].cells[CLM_SERVE].textContent = "1";
			document.getElementById('TBL').rows[get_pair_row(row)].cells[CLM_SERVE].textContent = "3";
			serveMode = SERVE_MODE_FIX_1st;
		}else{
			// ２番目選択 //
			if( chk_strEmpty(document.getElementById('TBL').rows[row].cells[CLM_SERVE].textContent) == true){
				document.getElementById('TBL').rows[row].cells[CLM_SERVE].textContent = "2";
				document.getElementById('TBL').rows[get_pair_row(row)].cells[CLM_SERVE].textContent = "4";
				inputMode = INPUT_MODE_NORMAL;
				// サーブエリア再設定 //
				for(var i=0; i<GAME_MAX; i++){
					Chg_ServeResultByGame(i);
				}
				change_bkColor();
				InputFinish();
			}else{
				// タップしたところに数字が入っている場合は、１，３を再選択 //
				document.getElementById('TBL').rows[row].cells[CLM_SERVE].textContent = "1";
				document.getElementById('TBL').rows[get_pair_row(row)].cells[CLM_SERVE].textContent = "3";
			}
		}
	}
}

//--------------------------------------------------//
// ゲーム欄 処理	 　　　　　　　　　　　　　　　 //
//--------------------------------------------------//
// タップ時処理 //
function Click_GameResult(Obj){
	var row = Obj.parentNode.rowIndex;
	var col = Obj.cellIndex;
	var gameNum = col-CLM_GAME_1st_atGAMeROW;
	
	if(Chk_EnaCell(row, col)==true){
		if(row == ROW_GAME_UP){ // 上段タップ //
			if(gameResult[gameNum]==GAME_RESULT_UP){
				gameResult[gameNum]=GAME_RESULT_EMPTY;
			}else{
				gameResult[gameNum]=GAME_RESULT_UP;
			}
		}else{	// 下段タップ //
			if(gameResult[gameNum]==GAME_RESULT_DN){
				gameResult[gameNum]=GAME_RESULT_EMPTY;
			}else{
				gameResult[gameNum]=GAME_RESULT_DN;
			}
		}
		Set_GameCell(gameNum);				// ゲーム欄変更 //
		Chg_ServeResultByGame(gameNum);		// サーブ欄変更 //
		InputFinish();						// 入力終了処理 //
		
	}
}

// ゲーム欄更新 //
function Set_GameCell(gameNum){
	var col = gameNum + CLM_GAME_1st_atGAMeROW;
	switch(gameResult[gameNum]){
		case GAME_RESULT_EMPTY:
			document.getElementById('TBL').rows[ROW_GAME_UP].cells[col].textContent = "";
			document.getElementById('TBL').rows[ROW_GAME_DN].cells[col].textContent = "";
			break;
		case GAME_RESULT_UP:
			document.getElementById('TBL').rows[ROW_GAME_UP].cells[col].textContent = "O";
			document.getElementById('TBL').rows[ROW_GAME_DN].cells[col].textContent = "";
			break;
		case GAME_RESULT_DN:
			document.getElementById('TBL').rows[ROW_GAME_UP].cells[col].textContent = "";
			document.getElementById('TBL').rows[ROW_GAME_DN].cells[col].textContent = "O";
			break;
	}
}

// 入力終了(ゲーム数書き込み) //
function InputFinish(){
	if(Chk_InputFinish(true)==true){
    	document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_SCORE_UP].textContent = getGamePt(ROW_MEM_1st);
		document.getElementById('TBL').rows[ROW_GAME_DN].cells[CLM_SCORE_DN].textContent = getGamePt(ROW_MEM_3rd);
    }else{
		document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_SCORE_UP].textContent = "";
		document.getElementById('TBL').rows[ROW_GAME_DN].cells[CLM_SCORE_DN].textContent = "";
	}
}

// 入力終了判定 //
// cellPaint: true 背景色塗りつぶしあり //
function Chk_InputFinish(cellPaint){
	var ret;

	if((Get_GameRsltWin(GAME_RESULT_UP)==GAME_WIN_POINT)
	 ||(Get_GameRsltWin(GAME_RESULT_DN)==GAME_WIN_POINT)){
		 ret = true;
	 }else{
		 ret = false;
	 }

	if(Chk_GameRsltBrank(cellPaint)==true){		// 空白あり //
		ret = false;
	}
	
	if(Chk_OverGame(cellPaint)==true){			 // 余剰ゲームあり //
		ret = false;
	}
	
	return ret;
}

// ゲーム結果空白チェック //
// cellPaint: true 空白欄の背景色も塗りつぶす //
// return: true 空白あり //
function Chk_GameRsltBrank(cellPaint){
	var lastGameNum=0;		// 0:全空白 //
	var ret=false;
	for(var i=GAME_MAX; i>0; i-- ){
		if(cellPaint==true){
			document.getElementById('TBL').rows[ROW_GAME_UP].cells[i-1+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
			document.getElementById('TBL').rows[ROW_GAME_DN].cells[i-1+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
		}
		if(gameResult[i-1] != GAME_RESULT_EMPTY){
			lastGameNum=i;
			break;
		}
	}
	
	for(var i=0; i<lastGameNum-1; i++){
		if(gameResult[i]==GAME_RESULT_EMPTY){
			ret=true;
			if(cellPaint==true){
				document.getElementById('TBL').rows[ROW_GAME_UP].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_WARNING_CELL;
				document.getElementById('TBL').rows[ROW_GAME_DN].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_WARNING_CELL;
			}
		}else{
			if(cellPaint==true){
				document.getElementById('TBL').rows[ROW_GAME_UP].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
				document.getElementById('TBL').rows[ROW_GAME_DN].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
			}
		}
	}
	
	return ret;
}
// ゲーム余剰チェック //
// cellPaint: true ゲーム余剰欄の背景色も塗りつぶす //
// return: true ゲーム余剰あり //
function Chk_OverGame(cellPaint){
	var win_up_num=0;
	var win_dn_num=0;
	var flg_gameEnd = false;	// ゲーム終了フラグ //
	var ret = false;
	for(var i=0; i<GAME_MAX; i++){
		if(gameResult[i]==GAME_RESULT_UP){
			win_up_num++;
		}else
		if(gameResult[i]==GAME_RESULT_DN){
			win_dn_num++;
		}
		
		if(flg_gameEnd == false){
			if((win_up_num==GAME_WIN_POINT)||(win_dn_num==GAME_WIN_POINT)){
				flg_gameEnd=true;
				if(cellPaint==true){
					document.getElementById('TBL').rows[ROW_GAME_UP].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
					document.getElementById('TBL').rows[ROW_GAME_DN].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
				}
			}
		}else{
			if(gameResult[i]!=GAME_RESULT_EMPTY){
				// ゲーム終了後に空白以外ならワーニング //
				ret=true;
				if(cellPaint==true){
					document.getElementById('TBL').rows[ROW_GAME_UP].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_WARNING_CELL;
					document.getElementById('TBL').rows[ROW_GAME_DN].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_WARNING_CELL;
				}
			}else{
				if(cellPaint==true){
					document.getElementById('TBL').rows[ROW_GAME_UP].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
					document.getElementById('TBL').rows[ROW_GAME_DN].cells[i+CLM_GAME_1st_atGAMeROW].style.backgroundColor = COLOR_NORMAL_CELL;
				}
			}
		}
	}
	return ret;
}
// ゲーム数チェック //
// UpDn: GAME_RESULT_UP/GAME_RESULT_DN //
function Get_GameRsltWin(UpDn){
	var ret=0;
	for(var i=0; i<GAME_MAX; i++){
		if(gameResult[i]==UpDn){
			ret++;
		}
	}
	return ret;
}
//--------------------------------------------------//
// サーブ欄 処理	 　　　　　　　　　　　　　　　 //
//--------------------------------------------------//
function Click_ServeResult(Obj){
	var row = Obj.parentNode.rowIndex;
	var col = Obj.cellIndex;
	var gameNum = col-CLM_GAME_1st;
	
	if(Chk_EnaCell(row, col)==true){
		if( (row == ROW_MEM_1st) || (row == ROW_MEM_2nd) ){
			// 上段タップ //
			switch(gameResult[gameNum]){
				case GAME_RESULT_UP:
					gameResult[gameNum] = GAME_RESULT_DN;
					break;
				case GAME_RESULT_DN:
					gameResult[gameNum] = GAME_RESULT_EMPTY;
					break;
				case GAME_RESULT_EMPTY:
					gameResult[gameNum] = GAME_RESULT_UP;
					break;
			}
		}else{
			// 下段タップ //
			switch(gameResult[gameNum]){
				case GAME_RESULT_UP:
					gameResult[gameNum] = GAME_RESULT_EMPTY;
					break;
				case GAME_RESULT_DN:
					gameResult[gameNum] = GAME_RESULT_UP;
					break;
				case GAME_RESULT_EMPTY:
					gameResult[gameNum] = GAME_RESULT_DN;
					break;
			}
		}
	}
	Set_GameCell(gameNum);				// ゲーム欄変更 //
	Chg_ServeResultByGame(gameNum);		// サーブ欄変更 //
	InputFinish();						// 入力終了処理 //
}
// ゲーム結果情報からサーブ結果を決定 //
function Chg_ServeResultByGame(gameNum){
	var rowEna=Get_rowServeEna(gameNum+CLM_GAME_1st);	  // サーブの有効行 //
	var gameRslt = gameResult[gameNum];
	var text;

		if(rowEna!=ROW_NA){
			if( (rowEna==ROW_MEM_1st)||(rowEna==ROW_MEM_2nd) ){
				// 上段 //
				if(gameRslt==GAME_RESULT_EMPTY){
					text = "";
				}else
				if(gameRslt==GAME_RESULT_UP){
					text = "O";
				}else{	//gameRslt==GAME_RESULT_DN//
					text = "X";
				}
			}else{	// 下段 //
				if(gameRslt==GAME_RESULT_EMPTY){
					text = "";
				}else
				if(gameRslt==GAME_RESULT_UP){
					text = "X";
				}else{	//gameRslt==GAME_RESULT_DN//
					text = "O";
				}
			}
			document.getElementById('TBL').rows[rowEna].cells[gameNum+CLM_GAME_1st].textContent = text;
		}else{
			text = "";
			document.getElementById('TBL').rows[ROW_MEM_1st].cells[gameNum+CLM_GAME_1st].textContent = text;
			document.getElementById('TBL').rows[ROW_MEM_2nd].cells[gameNum+CLM_GAME_1st].textContent = text;
			document.getElementById('TBL').rows[ROW_MEM_3rd].cells[gameNum+CLM_GAME_1st].textContent = text;
			document.getElementById('TBL').rows[ROW_MEM_4th].cells[gameNum+CLM_GAME_1st].textContent = text;
		}
//	  alert("rowEna="+rowEna+"\ngameRslt="gameRslt+"\ntext="+text);

}

// サーブエリア全削除 //
function del_serveArea(){
	const row_serveArea_tbl=[ROW_MEM_1st, ROW_MEM_2nd, ROW_MEM_3rd, ROW_MEM_4th];
	
	for( var i=0; i<PLAYER_MAX; i++){
		for( var gameNum=0; gameNum<GAME_MAX; gameNum++ ){
			document.getElementById('TBL').rows[row_serveArea_tbl[i]].cells[gameNum+CLM_GAME_1st].textContent = "";
		}
	}
}
//--------------------------------------------------//
// チェックボックス 　　　　　　　　　　　　　　	//
//--------------------------------------------------//
function chkbox_tieBreak(){
	Chg_ServeResultByGame(GAME_MAX-1);
	change_bkColor();
}

//--------------------------------------------------//
// UPDATEボタン		　　　　　　　　　　　　　　	//
//--------------------------------------------------//
// 日付データ初期化 //
function fixDate_init(){
    var date = new Date();
    document.FNameDate.txtDate.value=date.getFullYear() + "/" + (1+date.getMonth()) + "/" + date.getDate();
}


var gbl_reqID=6;
// ボタン押下 //
function score_update(){
//    var Member = ncmb.DataStore("member");
//    var reqID = 1;
    var Score = ncmb.DataStore("Score");
    var point=0;
    

    Score
//        .greaterThanOrEqualTo("ID", +200)
//        .EqualTo("ID", gbl_reqID)
        .equalTo("ID", String(gbl_reqID))
        .count()
        .fetchAll()
        .then(function(results){
            alert(results.count);
            gbl_reqID++;
            if(gbl_reqID<11){
                score_update();
            }
//            alert(results.length);
//        	makeRank(results);
//            alert(results.count);
        })
        .catch(function(err){
            alert("err1" + err);
        });

//    alert("aaa");


/*    Score   .equalTo("ID", String(reqID))
            .fetchAll()
            .then(function(results){
                for(var i=0; i<results.length; i++){
                    point += results[i].gamePt;
                }
    alert(results.length);
                if(results.length!=0){
                    alert(point/results.length);
                }
            })
			.catch(function(err){
				alert("データなし"+err)
			})
*/	
    
//	var game_No;
//	var date = new Date();
//	var Score = ncmb.DataStore("Score");
//	var strDate = date.getFullYear() + "/" + (1+date.getMonth()) + "/" + date.getDate();
//	var strDate0Pad;		// 0パディングした日付
//	if(Chk_InputFinish(false)==true){
//		if(document.FNameDate.txtDate.value != ""){
//			strDate = document.FNameDate.txtDate.value;
//		}
//		strDate = prompt("日付はこちらでよろしいですか？",strDate);
//		if(strDate != null){	// キャンセル押下でなければ //
//			if(chkDate(strDate)==true){	// 日付チェック
//				document.FNameDate.txtDate.value = strDate;
//				strDate0Pad = setDate0Pad(strDate);				// 日付0パディング
//				Score	.equalTo("date", strDate0Pad)
//						.order("gameNo", true)
//						.fetchAll()
//						.then(function(results){
//							if(results.length == 0){
//								game_No = 1;
//							}else{
//								game_No = results[0].gameNo + 1;
//							}
//							save_data(ROW_MEM_1st, strDate0Pad, game_No, Score);
//							save_data(ROW_MEM_2nd, strDate0Pad, game_No, Score);
//							save_data(ROW_MEM_3rd, strDate0Pad, game_No, Score);
//							save_data(ROW_MEM_4th, strDate0Pad, game_No, Score);
//							alert("保存成功です。 gameNo = " + game_No);
//	                        if( confirm("全削除しますか？") ){
//	                            all_clear();
//	                        }
//						})
//						.catch(function(err){
//							alert("score入力失敗"+err)
//						})
//			}else{
//				alert("日付に間違いがあります。(半角で入力お願いします)");
//			}
//		}
//	}
//	
}

// スコア作成 //
function makeRank(results)
{

	for(var i=0; i<results.count; i++){

		var p1 = new Promise(
			
			function(resolve, reject){
			var Score = ncmb.DataStore("Score");

				Score
					.equalTo("ID", Number(results[i].ID))
					.count()
					.fetchAll()
					.then(function(ScoreRslts){
						resolve(ScoreRslts);
					})
					.catch(function(err){
//						alert("err2" + err);
						refect("err2");
					})
						
			}
			
		);
		
		p1.then(
			function(Rslts){
				alert(Rslts.count);
			}
		)
		.catch(
			function(err){
				alert(err)
			}
		)
	}
}

/*
function funcGet_DtBase(resolve, reject)
{
	var Score = ncmb.DataStore("Score");

		Score
			.equalTo("ID", Number(object.ID))
			.count()
			.fetchAll()
			.then(function(ScoreRslts){
				if(ScoreRslts.count != 0){
					alert("ID" + ScoreRslts.count);
				}
			})
			.catch(function(err){
				alert("err2" + err);
			})

}
*/

// データ保存 //
function save_data( row, strDate, game_No, Score ){
/*
    var score = new Score();

    backUp_prvDt(game_No,strDate,row);				// 前回データ用に保存

	score.set("date", strDate)
		.set("gameNo", game_No)
		.set("ID", get_ID(row))
		.set("pairID", get_pairID(row))
		.set("serve1st", get_serve1st(row))
		.set("serve2nd", get_serve2nd(row))
		.set("gamePt", getGamePt(row))
        .set("serveTurn", getServeTurn(row))
		.save()
		.then(function(object){
			//成功する時の処理
			
			//$("#message").html("<p>データ保存に成功!</p>");
		})
		.catch(function(error) {
			//エラーが発生する時の処理
	alert("保存error:" + error.message)
//			  $("#message").html("error:" + error.message);			 

		});
*/
}

// ID取得 //
function get_ID(row){
	return document.getElementById('TBL').rows[row].cells[CLM_ID].textContent;
}

// 名前取得 //
function get_name(row){
    return document.getElementById('TBL').rows[row].cells[CLM_NAME].textContent;
}

// ペア取得 //
function get_pairID(row){
	return get_ID(get_pair_row(row))
}

// 1stサーブキープ取得 //
function get_serve1st(row){
	var col;
	for(col=CLM_GAME_1st; col<(CLM_GAME_1st+4); col++){
		switch (document.getElementById('TBL').rows[row].cells[col].textContent){
			case "O":
				return (1);
			case "X":
				return (0);
			case "":
				break;
			default:
				alert("サーブキープ1st異常");
				break;
		}
	}
	alert("サーブキープ1st未入力？");
	return null;
}

// 2ndサーブキープ取得 //
function get_serve2nd(row){
	var col;
	for(col=(CLM_GAME_1st+4); col<(CLM_GAME_1st+7); col++){
		switch (document.getElementById('TBL').rows[row].cells[col].textContent){
			case "O":
				return (1);
			case "X":
				return (0);
			case "":
				break;
			default:
				alert("サーブキープ2nd異常");
				break;
		}
	}
	return null;
}

// ゲームポイント取得 //
function getGamePt(row){
	var ret=0;
	switch(row){
		case ROW_MEM_1st:
		case ROW_MEM_2nd:
			ret = Get_GameRsltWin(GAME_RESULT_UP);
			break;
		case ROW_MEM_3rd:
		case ROW_MEM_4th:
			ret = Get_GameRsltWin(GAME_RESULT_DN);
			break;
		default:
			alert("ゲームポイント異常");
			break;
	}
	
	if(ret==GAME_WIN_POINT){
		ret++;
	}
	
	return ret;
}

// 日付チェック //
function chkDate(strDate){
	var ret = true;
	var staPos = 0;
	var endPos = 0;
	var tempStr;
	
	// 年チェック
	endPos = strDate.indexOf("/",staPos)
	if(endPos == 4){
		tempStr=strDate.slice(staPos, endPos);
		if(chkNum(tempStr)==false){
			ret = false;
		}
	}else{
		ret = false;
	}
	
	// 月チェック
	staPos = endPos+1;
	endPos = strDate.indexOf("/",staPos);
	if(endPos!=-1){
		tempStr=strDate.slice(staPos, endPos)
		if((chkNum(tempStr)==false)
		||((Number(tempStr)<1)||(Number(tempStr)>12))){
			ret = false;
		}
	}else{	// "/"がなければ
		ret = false;
	}
	
	// 日チェック
	staPos = endPos+1;
	tempStr=strDate.slice(staPos);
	if((chkNum(tempStr)==false)
	||((Number(tempStr)<1)||(Number(tempStr)>31))){
		ret = false;
	}

	
	return ret;
}

// 数値チェック //
function chkNum(str){
	var ret = true;
	if(str.match(/[^0-9]+/)){
		ret = false;
	}
	return ret;
}

// 日付0パディング //
// 日付チェック完了が前提 //
function setDate0Pad(strDate){
	var retStr;
	var staPos = 0;
	var endPos = 0;
	var tempStr;
	
	// 年抽出
	endPos = strDate.indexOf("/",staPos)+1;
	retStr = strDate.slice(staPos, endPos);
	
	// 月 0パディング
	staPos = endPos;
	endPos = strDate.indexOf("/",staPos);
	tempStr = strDate.slice(staPos, endPos);
	retStr = retStr + ("00"+tempStr).slice(-2) + "/";
	
	// 日 0パディング
	staPos = endPos+1;
	tempStr = strDate.slice(staPos);
	retStr = retStr + ("00"+tempStr).slice(-2);

	return retStr;
}



function getServeTurn(row){
    return document.getElementById('TBL').rows[row].cells[CLM_SERVE].textContent;
}

//--------------------------------------------------//
// SCORE CLEAR　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
function score_clear(){
	var gameNum;

    // ゲーム欄クリア
	for(gameNum=0; gameNum<GAME_MAX; gameNum++){
		gameResult[gameNum]=GAME_RESULT_EMPTY;
		Set_GameCell(gameNum);				// ゲーム欄変更 //
	}

    // サーブエリアクリア //
	del_serveArea();

	InputFinish();						// 入力終了処理 //
}

//--------------------------------------------------//
// 前回データ 　　　　　　　　　　　　　　　　      //
//--------------------------------------------------//
    // previous data //
    var prv_gameNo;
    var prv_strDate;
    var prv_name　= ["","","",""];
    var prv_GamePt = [0,0,0,0];

// 前回データ表示 //
function get_prv_data(){
    if(prv_gameNo == null){
        alert("前回入力データはありません");    
    }else{
    	alert("前回のgameNo = "+prv_gameNo 
            + "\n前回の日付 = " + prv_strDate
            + "\n上段ゲーム数 = " + prv_GamePt[0] + " |" +  prv_name[0] + "さん," + prv_name[1] +"さん"           //上段側のゲーム、名前
            + "\n下段ゲーム数 = " + prv_GamePt[2] + " |" +  prv_name[2] + "さん," + prv_name[3] +"さん"           //上段側のゲーム、名前
            );
    }
    
}

// 前回データ用に保存 //
function backUp_prvDt(game_No,strDate,row){
    var ptr = get_person_number(row);

    prv_gameNo = game_No;
    prv_strDate = strDate;
    prv_name[ptr] = get_name(row);
    prv_GamePt[ptr] = getGamePt(row);
}



//--------------------------------------------------//
// ALL CLEAR　　　　　　　　　　　　　　　　　      //
//--------------------------------------------------//
function all_clear(){

    if(inputMode != INPUT_MODE_SERVE){
        // 名前クリア //
        document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_NAME].textContent = "";
        document.getElementById('TBL').rows[ROW_MEM_2nd].cells[CLM_NAME].textContent = "";
        document.getElementById('TBL').rows[ROW_MEM_3rd].cells[CLM_NAME].textContent = "";
        document.getElementById('TBL').rows[ROW_MEM_4th].cells[CLM_NAME].textContent = "";
    
        // ID クリア //
        document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_ID].textContent = ""
        document.getElementById('TBL').rows[ROW_MEM_2nd].cells[CLM_ID].textContent = ""
        document.getElementById('TBL').rows[ROW_MEM_3rd].cells[CLM_ID].textContent = ""
        document.getElementById('TBL').rows[ROW_MEM_4th].cells[CLM_ID].textContent = ""
        
        // 順番セット //
    	document.getElementById('TBL').rows[ROW_MEM_1st].cells[CLM_SERVE].textContent = "1";
    	document.getElementById('TBL').rows[ROW_MEM_2nd].cells[CLM_SERVE].textContent = "3";
    	document.getElementById('TBL').rows[ROW_MEM_3rd].cells[CLM_SERVE].textContent = "2";
    	document.getElementById('TBL').rows[ROW_MEM_4th].cells[CLM_SERVE].textContent = "4";
    
        score_clear();
        
        document.chbox.tieBreak.checked=false;
    
    	change_bkColor();
    }
    
}
//--------------------------------------------------//
// CSV create 　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
function csv_create(){
	alert("CSV");
}
//--------------------------------------------------//
// その他 処理　　　　　　　　　　　　　　　　　	//
//--------------------------------------------------//
// 背景色変更 //
function change_bkColor(){
	var scoreTbl = document.getElementById('TBL');
	for( var i=ROW_MEM_1st; i<scoreTbl.rows.length; i++ ){
		for( var j=0; j<scoreTbl.rows[i].cells.length; j++ ){
			var Cells=scoreTbl.rows[i].cells[j];
			if(Chk_EnaCell(i,j)==false){
				Cells.style.backgroundColor = COLOR_INVALID_CELL;
			}else{
				Cells.style.backgroundColor = COLOR_NORMAL_CELL;
			}
		}
	}
}

// セル 有効・無効判定 //
function Chk_EnaCell(row, col){
	var ret = true;
	
	if(inputMode == INPUT_MODE_SERVE){	// サーバ入力モードなら //
		if(chk_serve_turn_cell(row, col) == true ){
			// サーブ順のセルなら //
			ret = true;
		}else{
			ret = false;
		}
	}else{	// 通常モードなら //
		if( chk_serve_rslt_cell(row, col) == true ){
			if(((document.getElementById('TBL').rows[row].cells[CLM_SERVE].textContent-1) == ((col-CLM_GAME_1st)%4))	// サーブ順とゲームが一致している //
			 &&((col!=(CLM_GAME_1st+GAME_MAX-1))||(document.chbox.tieBreak.checked==false))		// タイブレが選択されていない //
			 ){
				ret = true;
			}else{
				ret = false;
			}
		}
	}
	
	return ret;
}

// 列で有効となっているサーブの行の取得 //
function Get_rowServeEna(col){
	var ret;
	if( Chk_EnaCell(ROW_MEM_1st, col)==true ){
		ret = ROW_MEM_1st;
	}else
	if( Chk_EnaCell(ROW_MEM_2nd, col)==true ){
		ret = ROW_MEM_2nd;
	}else
	if( Chk_EnaCell(ROW_MEM_3rd, col)==true ){
		ret = ROW_MEM_3rd;
	}else
	if( Chk_EnaCell(ROW_MEM_4th, col)==true ){
		ret = ROW_MEM_4th;
	}else{
		ret = ROW_NA;	// 該当なし //
	}
	
	return ret;
}


// サーブ順のセル判定 //
function chk_serve_turn_cell(row, col){
	if((col == CLM_SERVE) && ((row == ROW_MEM_1st)||(row == ROW_MEM_2nd)||(row == ROW_MEM_3rd)||(row == ROW_MEM_4th))){
		return true;
	}else{
		return false;
	}
}

// サーブ結果のセル判定 //
function chk_serve_rslt_cell(row, col){
	if(((col >= CLM_GAME_1st)&&(col < (CLM_GAME_1st+GAME_MAX))) 
	&& ((row == ROW_MEM_1st)||(row == ROW_MEM_2nd)||(row == ROW_MEM_3rd)||(row == ROW_MEM_4th))){
		return true;
	}else{
		return false;
	}
	
}


// ペアの行取得 //
function get_pair_row(row){
	var ret;
	switch(row){
		case ROW_MEM_1st:
			ret = ROW_MEM_2nd;
			break;
		case ROW_MEM_2nd:
			ret = ROW_MEM_1st;
			break;
		case ROW_MEM_3rd:
			ret = ROW_MEM_4th;
			break;
		case ROW_MEM_4th:
			ret = ROW_MEM_3rd;
			break;
			
	}
	return ret;
}

// 文字列がnullならtrueを返す //
function chk_strEmpty( str ){
    var ret = false;
    if((str == "")||(str == null)){
        ret = true;
    }
    
    return ret;
}

// 行情報から何番目の人かを返す 0～3 //
function get_person_number(row){
	var ret;
	switch(row){
		case ROW_MEM_1st:
			ret = 0;
			break;
		case ROW_MEM_2nd:
			ret = 1;
			break;
		case ROW_MEM_3rd:
			ret = 2;
			break;
		case ROW_MEM_4th:
			ret = 3;
			break;
		default:
			ret = 0;
			alert("関数get_person_number()異常");
			break;
	}
	return ret;
}


