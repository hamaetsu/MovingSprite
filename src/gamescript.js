var background;
var gameLayer;
var scrollSpeed = 1;
var ship;
var gameGravity = -0.05;
var gameScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		gameLayer = new game();
		gameLayer.init();
		this.addChild(gameLayer);
	}
});
var game = cc.Layer.extend({
	init:function() {
		this._super();
		background = new ScrollingBG();
		this.addChild(background);
		this.scheduleUpdate();
		ship = new Ship();
		this.addChild(ship);
	},
	update:function(dt) {
		background.scroll();
		ship.updateY();
	} 
});
var ScrollingBG = cc.Sprite.extend({
	ctor:function() {
		this._super();
		this.initWithFile("assets/background.png");
	},
	onEnter:function() {
		this.setPosition(480, 160);
	},
	scroll:function() {
		this.setPosition(this.getPosition().x - scrollSpeed, this.getPosition().y);
		if (this.getPosition.x < 0) {
			this.setPosition(this.getPosition().x + 480, this.getPosition().y);
		} 
	}
});
var Ship = cc.Sprite.extend({
	ctor:function() {
		this._super();
		this.initWithFile("assets/ship.png");
		this.ySpeed = 0;
	},
	onEnter:function() {
		this.setPosition(60, 160);
	},
	updateY:function() {
		this.setPosition(this.getPosition().x, this.getPosition().y + this.ySpeed);
		this.ySpeed += gameGravity;
	}
});