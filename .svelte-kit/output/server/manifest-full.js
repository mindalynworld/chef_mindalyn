export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "chef_mindalyn/_app",
	assets: new Set(["config/gallery-data.ts","favicon.png","images/.DS_Store","images/crafts/fishies.jpeg","images/crafts/painting.jpeg","images/crafts/roses.jpeg","images/crafts/saturn.jpeg","images/crafts/shorts.jpeg","images/crafts/skirtshirt.jpeg","images/film/1.jpg","images/film/10.JPG","images/film/11.jpg","images/film/12.JPG","images/film/13.jpg","images/film/14.JPG","images/film/15.JPG","images/film/16.JPG","images/film/17.jpg","images/film/18.jpg","images/film/2.jpg","images/film/3.jpg","images/film/4.jpg","images/film/5.jpg","images/film/6.jpg","images/film/7.jpg","images/film/8.JPG","images/film/9.JPG","images/food/10Fish.jpeg","images/food/11FishHorizontal.jpeg","images/food/1PersianChicken.jpeg","images/food/2TaiwaneseChicken.jpeg","images/food/3Donuts.jpeg","images/food/4BreakfastTaco.jpeg","images/food/5KimchiFriedRice.jpeg","images/food/6Pasta.jpeg","images/food/7SalmonLemonPasta.jpeg","images/food/8TomatoSoup.jpeg","images/food/9Caprese.jpeg","images/food/BeefBourguignon.jpeg","images/food/BreakfastSpread.jpeg","images/food/ChickenThighs.jpeg","images/food/ChickenTortillaSoup.jpeg","images/food/ChineseChickenWings.jpeg","images/food/GreekYogurtEggs.jpeg","images/food/MorocconTagine.jpeg","images/food/MusclePasta.jpeg","images/food/Oysters.jpeg","images/food/PadKraPow.jpeg","images/food/PadSeeEw.jpeg","images/food/RicottaSquash.jpeg","images/food/SardinePasta.jpeg","images/food/Shakshuka.jpeg","images/food/SpamEggAvoBowl.jpeg","images/food/SpinachPasta.jpeg","images/food/Sushi.jpeg","images/food/SweetPotatoeChickpea.jpeg","images/food/SweetSalmonBowl.jpeg","images/food/ThanksgivingSpread1.jpeg","images/food/ThanksgivingSpread2.jpeg","images/food/Udon.jpeg","images/food/VietnameseVermicelli.jpeg","images/food/Zaalouk.jpeg","images/food/ZuchinniPancakes.jpeg"]),
	mimeTypes: {".ts":"video/mp2t",".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".JPG":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BzHb-ujI.js",app:"_app/immutable/entry/app.VK1ZsArn.js",imports:["_app/immutable/entry/start.BzHb-ujI.js","_app/immutable/chunks/Drr7oOAq.js","_app/immutable/chunks/md9-hpGs.js","_app/immutable/chunks/BdOD0fp4.js","_app/immutable/entry/app.VK1ZsArn.js","_app/immutable/chunks/md9-hpGs.js","_app/immutable/chunks/HUp8kJEa.js","_app/immutable/chunks/Cm7brUZo.js","_app/immutable/chunks/BRVjruD8.js","_app/immutable/chunks/BdOD0fp4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
