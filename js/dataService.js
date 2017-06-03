angular.module('quoteBook').service('dataService', function(){

	var quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];

	this.getQuotes = function() {
		return quotes;
	};

	this.addData = function(data) {
		if (data.hasOwnProperty('text') && data.hasOwnProperty('author')){
			for (var p in data) {		
				if (typeof data[p] !== 'string') {
					return false;
				}
			}
			var newData = {
				text: data.text,
				author: data.author
			}
			quotes.push(newData);
		} else {
			alert('Please add both the quote and the author.');
			return false;
		}
	};

	this.removeData = function(str) {
		for(var i = 0; i < quotes.length; i++) {
			if (quotes[i].text.toLowerCase() === str.toLowerCase()) {
				quotes.splice(i, 1);
			}
		}
	};

});