(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.heart_proto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCBE5").ss(3,1,1).p("ApOigQAAiJBghgQBhhhCJAAQCJAABgBhQARARANASQANgSARgRQBhhhCJAAQCJAABZBYQBZBYAJBxQAJBwhLCCQhKCDhkBgQhkBhjzB+Qk9iTjMkcQhNhrAAhxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCBE5").s().p("ACUC1IgPAQIgEAFIATgVgACVBVQAAhghEhFQhFhEhgAAQhNAAgUABQBAg2BWAAQBgAABEBEQBFBFAABgQAABVg1A/IAAhfgAjEiFIANgMIgSARIAFgFg");
	this.shape_1.setTransform(32.3,-21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF99CC").s().p("AoBA7QhNhqAAhwQAAiJBghgQBhhhCJgBQCJABBgBhQARAQANASQANgSARgQQBhhhCJgBQCJAABZBZQBZBXAJBxQAJBwhLCCQhKCChkBhQhkBhjzB9Qk9iTjMkcgAHIgNIAPgQIgPAQgAGUkjQBEBFAABgIAABfQA1g/AAhUQAAhhhFhFQhEhEhhAAQhWAAhAA2QAUgCBNAAQBhAABFBFgAB+lYIANgMIgNAMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart_proto, new cjs.Rectangle(-60.6,-50.5,121.3,101.1), null);


(lib.heart_swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.played){
			this.stop();
			this.played = !0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// 圖層_1
	this.instance = new lib.heart_proto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.1},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:5.4},0).wait(1).to({rotation:6.4},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:8.6},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:10.7},0).wait(1).to({rotation:11.8},0).wait(1).to({rotation:12.9},0).wait(1).to({rotation:13.9},0).wait(1).to({rotation:15},0).wait(1).to({rotation:14},0).wait(1).to({rotation:13},0).wait(1).to({rotation:12},0).wait(1).to({rotation:11},0).wait(1).to({rotation:10},0).wait(1).to({rotation:9},0).wait(1).to({rotation:8},0).wait(1).to({rotation:7},0).wait(1).to({rotation:6},0).wait(1).to({rotation:5},0).wait(1).to({rotation:4},0).wait(1).to({rotation:3},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-11},0).wait(1).to({rotation:-12},0).wait(1).to({rotation:-13},0).wait(1).to({rotation:-14},0).wait(1).to({rotation:-15},0).wait(1).to({rotation:-14},0).wait(1).to({rotation:-13},0).wait(1).to({rotation:-12},0).wait(1).to({rotation:-11},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-50.5,121.3,101.1);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// 圖層_1
	this.heart_swing = new lib.heart_swing();
	this.heart_swing.name = "heart_swing";
	this.heart_swing.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.heart_swing).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-50.5,121.3,101.1);


// stage content:
(lib._520_obj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.heart_title = new lib.heart();
	this.heart_title.name = "heart_title";
	this.heart_title.parent = this;
	this.heart_title.setTransform(300,200);

	this.timeline.addTween(cjs.Tween.get(this.heart_title).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(514.4,349.5,121.3,101.1);
// library properties:
lib.properties = {
	id: '03EDD47AAC11ED47802F0992E32A6353',
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFB7FF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['03EDD47AAC11ED47802F0992E32A6353'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;