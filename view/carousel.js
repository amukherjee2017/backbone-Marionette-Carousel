BlockView = Mn.View.extend({ //item view
	tagName:'div',
	className:'col-xs-6 padding-0',
    template: '#block-template'
});

CarouselBody = Mn.CollectionView.extend({ // the carousel list view
	tagName: 'div',
    className:'carousel-blocks row',
    childView: BlockView,
    index: 0,
    size: 4,
    filter: function (child, i) {
    	return  i >= this.index && i < this.index + this.size;
    },
    prev: function() {
	    var self = this;
	    if (this.index > 0) {
	        this.index = this.index - this.size;
             self.render();
	    }
    },
    next: function() {
        var self = this;
        if (this.index + this.size < this.collection.length) {
        	this.index = this.index + this.size ;
            self.render(); 
        }
    },
    setSize: function(size) {
    	this.size = size;
    }

});

   
 CarouselView = Mn.View.extend({ //The carousel with items
	 tagName:'div',
	 className:'container',
	 id:'spectrecarousel',
     template: '#carousel-template',
     regions: {
    	 listBody: {
    		 el: 'div',
             replaceElement: false
         }
     },

     ui: {
    	 left: '.previous',
         right: '.next'
     },

     events: {
         'click @ui.left': 'prev',
         'click @ui.right': 'next',
     },

     prev: function() {
    	 this.carouselViewBody.prev();
     },
        
     next: function() {
    	 this.carouselViewBody.next();
     },
        
     initialize: function () {
    	 console.log('initialize');
         var self = this;
     },

     onRender: function () {
    	 this.carouselViewBody = new CarouselBody({
                collection: this.collection
         });
         this.showChildView('listBody',this.carouselViewBody);
     }
        
});
