var Block = Backbone.Model.extend({
	defaults: {
		title: '',
		images: []
	}
});

var Blocks = Backbone.Collection.extend({
  model: Block
});

var blockcollection = new Blocks(
		[{
			"title": "INDIA",
			"images": ["http://www.drion.in/images/india.jpg",
				"http://www.returnofkings.com/wp-content/uploads/2016/08/mav3.jpg",
				"http://www.teachforindia.org/sites/default/files/field/image/Screen%20Shot%202016-12-15%20at%206.17.55%20PM.png",
				"https://images.mapsofindia.com/my-india/2016/08/why-india-matters.jpg"]
		},
		{
			"title": "Paris",
			"images": ["https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/eiffel-tower-summit-priority-access-with-host-in-paris-408219.jpg",
				"https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6602/SITours/skip-the-line-louvre-seine-river-cruise-and-big-bus-hop-on-hop-off-in-paris-472263.jpg"]
		},
		{
			"title": "ITALY",
			"images": ["https://www.eurail.com/sites/eurail.com/files/styles/asset_image_images_slider_big/public/assets/images/2017/02/coliseum_of_rome_italy_.jpg?itok=9iuq0Uom",
				"https://www.interrail.eu/sites/interrail.eu/files/assets/images/2017/01/italy_pass_regular_desktop.jpg",
				"https://newmedia.thomson.co.uk/live/vol/3/8c06dfa8e2bca680cf3957f39c9452861788d53a/1080x608/web/EUROPEMEDITERRANEANITALYCON_ITAITALIANCITIESVENICERES_000655.jpg"]
		},
		{
			"title": "Barcelona",
			"images": ["http://i.vimeocdn.com/video/478770627_1280x720.jpg",
				"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
				"https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/14218/SITours/sagrada-familia-facades-private-tour-with-independent-interior-visit-in-barcelona-212282.jpg"]
		},
		{
			"title": "Avengers",
			"images": ["https://lumiere-a.akamaihd.net/v1/images/usa_avengers_gt_avntactics_n_2d53e664.jpeg?region=0%2C0%2C400%2C300",
				"http://fanfest.com/wp-content/uploads/2017/07/marvel_avengers.jpg"
				]
		},{
			"title": "Marvel Studios",
			"images": ["https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Marvel_Studios_flipbook_logo_new.ogv/220px-seek%3D23-Marvel_Studios_flipbook_logo_new.ogv.jpg",
				"https://i.kinja-img.com/gawker-media/image/upload/s--Lb3hXeIO--/c_scale,fl_progressive,q_80,w_800/pdaunec6ksf9t5dtv912.jpg",
				"https://c1.staticflickr.com/6/5829/23427660512_ac8fda2b15_b.jpg"]
		},{
			"title": "Iron Man",
			"images": ["http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/iron-man-wallpaper-6-610x343.jpg",
				"https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/220px-Iron_Man_bleeding_edge.jpg", 
				"https://www.scienceabc.com/wp-content/uploads/2015/12/iron-man-suit.jpg"]
		},{
			"title": "HULK",
			"images": ["https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png",
				"https://blogs-images.forbes.com/robcain/files/2017/07/Hulk.jpg?width=960",
				"https://cdn.movieweb.com/img.news.tops/NEbZRNg3YX0cfc_1_b/Hulk-Movie-Rights-Explained-Marvel-Universal.jpg",
				"https://cdn.vox-cdn.com/thumbor/FIqSogROnixM1f5Je9ygpTaxKCk=/0x0:1543x868/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55727261/hulk-smile-avengers-banner.0.0.jpg"]
		},{
			"title": "Football Players",
			"images": ["http://images.indianexpress.com/2017/08/luis-suarez_reuters-m.jpg",
				"http://www.telegraph.co.uk/content/dam/football/2017/09/14/TELEMMGLPICT000139160613_trans_NvBQzQNjv4BqsfOCuR7AN27npnm9MstSEE8JefeBOfcHidgyq_sB56Q.jpeg",
				"https://i.ytimg.com/vi/TYBDFq_Aqa8/maxresdefault.jpg"]
		},{
			"title": "Cricket Players",
			"images": ["https://www.sporteology.com/wp-content/uploads/2013/03/Sachin-Tendulkar-Most-Popular-Cricket-Player.jpg",
				"https://s.ndtvimg.com/images/stories/kapil-dev_300.jpg",
				"http://images.financialexpress.com/2017/01/Y2-2.jpg"]
		},{
			"title": "Hockey",
			"images": ["https://thumbs.dreamstime.com/z/ice-hockey-player-milan-italy-oct-adam-estoclet-hc-milano-game-against-valpellice-agora-arena-october-34426427.jpg",
				"https://previews.123rf.com/images/leonido/leonido1006/leonido100600073/7217193-Ice-hockey-player-Stock-Vector.jpg"]
		},{
			"title": "U-17 World Cup",
			"images": ["http://images.indianexpress.com/2017/09/fifa-u-17-india1.jpg",
				"http://img.fifa.com/images/fu17wc/2017/opengraph/generic.png",
				"http://images.indianexpress.com/2017/10/india-u17-team-7591.jpg",
				"http://img.fifa.com/mm/photo/tournament/competition/02/73/15/77/2731577_large-lnd.jpg"]
		}
		]);