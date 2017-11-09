const App = Mn.Application.extend({
	region: '#main-content',
	
	onStart: function() {
		var main = this.getRegion();  // Has all the properties of a `Region`
    	main.show(new CarouselView({collection: blockcollection}));
    	Backbone.history.start();
	}
});
const CarouselApp = new App();
CarouselApp.start();

