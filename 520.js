var lib = AdobeAn.compositions['03EDD47AAC11ED47802F0992E32A6353'].getLibrary(); //poker_element.js內的函數庫
var log = console.log; //shortcut

var canvas, stage, exportRoot, game;

//方便取得陣列末值
if(!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

//轉換query string
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//初始化
var init = () =>{
	canvas = document.getElementById("canvas");

	exportRoot = new lib._520_obj();
	stage = new createjs.Stage("canvas");

	stage.addChild(exportRoot);
	createjs.Ticker.framerate = lib.properties.fps;
	stage.update();

	createjs.Ticker.addEventListener("tick", stage);

	//Code to support hidpi screens and responsive scaling.
	resizeCanvas = function(){

		let h = window.innerHeight,
		w = window.innerWidth,
		r = window.devicePixelRatio;

		//畫布寬高
		canvas.style.width = w + "px";
		canvas.style.height = h + "px";
		//畫布像素(?)
		canvas.width = w;
		canvas.height = h;
		//讀檔圈圈
		if(exportRoot.loading)exportRoot.loading.x = w/2;
		//標題
		if(exportRoot.title)exportRoot.title.x = w/2;
		//副標題
		if(exportRoot.subtitle)exportRoot.subtitle.x = w/2;
		//標題愛心
		if(exportRoot.heart_title)exportRoot.heart_title.x = w/2;
		//內容
		if(exportRoot.msg)exportRoot.msg.x = w/2;
		//重繪主要畫布
		ReDraw();
	}
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	createjs.Sound.on("fileload", SoundLoaded);
 	createjs.Sound.registerSound("./Yanni - In The Morning Light Piano Cover.mp3", "theme");

}

const SoundLoaded = e =>{
	let instance = createjs.Sound.play("theme",{ loop: -1, volume: 1, offset: 1500 });  // play using id.  Could also use full source path or event.src.
	//instance.on("complete", this.handleComplete, this);
	//instance.volume = 0.5;
	starting();
}

//開始執行函數
const starting = () =>{
	game = { hearts:[], heartspeed:5 }; //建立遊戲物件

	exportRoot.heart_title.play();
	exportRoot.heart_title.heart_swing.play();

	exportRoot.title.play();

	//exportRoot.loading.visible = !1;

	exportRoot.msg.text = getParameterByName('msg');
	exportRoot.msg.y = window.innerHeight;

	canvas.addEventListener('contextmenu', function(e){e.preventDefault();});

	canvas.addEventListener('mousedown', MouseDown);
    canvas.addEventListener('mouseup', MouseUp);
    canvas.addEventListener('mousemove', MouseMove);

	canvas.addEventListener('touchstart', TouchStart);
	canvas.addEventListener('touchmove', TouchMove);
	canvas.addEventListener('touchend', TouchEnd);

	createjs.Ticker.addEventListener("tick", Ticking);
}

const ReDraw = () =>{
	if(null!=stage && null!=canvas){
		stage.clear();
		stage.draw(canvas.getContext("2d"), false);
	}
}

const MouseDown = e =>{
    if(e.which==1){
    	HeartCreate(e.clientX,e.clientY);
    }else if(e.which==2){
    }else if(e.which==3){
    };
}

const MouseUp = e =>{
    if(e.which==1){
    	HeartBorn();
    }else if(e.which==2){
    }else if(e.which==3){
    };
}

const MouseMove = e =>{
    if(game.creating)HeartScale(e.clientX,e.clientY);
}

const TouchStart = e =>{
	e.preventDefault();
	HeartCreate(e.changedTouches["0"].clientX,e.changedTouches["0"].clientY);
}

const TouchMove = e =>{
	e.preventDefault();
	HeartScale(e.changedTouches["0"].clientX,e.changedTouches["0"].clientY);
}

const TouchEnd = e =>{
	e.preventDefault();
	HeartBorn();
}

const HeartCreate = (x=0,y=0) =>{
	let NewHeart = new lib.heart();
	game.hearts.push(NewHeart);
	NewHeart.x = x;
	NewHeart.y = y;
	exportRoot.empty.addChild(NewHeart);
	game.creating = !0;
	ReDraw();
}

const HeartScale = (x=0,y=0) =>{
	let Heart = game.hearts.last(),
	X = x - Heart.x,
	Y = y - Heart.y,
	R = Math.sqrt(X*X+Y*Y);

	Heart.scaleX = Heart.scaleY = R/50>0.5? R/50 : 0.5;

	ReDraw();
}

const HeartBorn = () =>{
	game.creating = !1;
	game.hearts.last().play();
	game.hearts.last().heart_swing.play();
	//game.hearts.last().heart_swing.heart_proto.cache(-60,-50,120,100);
}

const Ticking = e =>{
	let length = game.hearts.length;
	if(game.creating)length--;
	while(length>0){
		length--;
		game.hearts[length].y -= game.heartspeed / Math.sqrt( game.hearts[length].scaleY );
		if(game.hearts[length].y < -500){
			exportRoot.empty.removeChild(game.hearts[length]);
			game.hearts.splice(length,1);
		}
	}

	if(exportRoot.heart_title.y > -500)exportRoot.heart_title.y -= game.heartspeed;
	if(exportRoot.msg.y > -1000)exportRoot.msg.y -= game.heartspeed/4;
	if(exportRoot.subtitle.alpha<1)exportRoot.subtitle.alpha += 0.01;
	if(exportRoot.loading.alpha>0)exportRoot.loading.alpha -= 0.1;
}