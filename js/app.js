(function() {

	var app = angular.module('resources', []);

	app.controller('rsrcFltr', function($scope) {

	// Define list of my documents
	$scope.myDocuments = [
	 	{
	 		type:"file",
	 		title:"File Upload 1"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 1"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 1"
	 	},
	 	{
	 		type:"file",
	 		title:"File Upload 2"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 2"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 2"
	 	},{
	 		type:"file",
	 		title:"File Upload 3"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 3"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 3"
	 	}
	];

	// Define list of all documents
	$scope.allDocuments = [
	 	{
	 		type:"file",
	 		title:"File Upload 1"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 1"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 1"
	 	},
	 	{
	 		type:"file",
	 		title:"File Upload 2"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 2"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 2"
	 	},{
	 		type:"file",
	 		title:"File Upload 3"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 3"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 3"
	 	},
	 	{
	 		type:"file",
	 		title:"File Upload 4"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 4"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 4"
	 	},
	 	{
	 		type:"file",
	 		title:"File Upload 5"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 5"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 5"
	 	},{
	 		type:"file",
	 		title:"File Upload 6"
	 	},
	 	{
	 		type:"book",
	 		title:"Book 6"
	 	},
	 	{
	 		type:"podcast",
	 		title:"Podcast 6"
	 	}
	];

	// Define filter list
	$scope.docTypes = ["file","book","podcast"];

	// Initialize filter object
	$scope.filter = {};

	// Reset the filter
	$scope.resetFilter = function() {
	  // set filter object back to blank
	  $scope.filter = {}; 
	}

	// Initialize search object
	$scope.searchDocs = '';

	});

})();