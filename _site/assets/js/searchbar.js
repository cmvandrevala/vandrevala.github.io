var searchJSON;
var results;

function getSearchJSON() {
    $.getJSON("/search.json", function(jsonData) {
        searchJSON = jsonData;
    });
}

function clearResultsList() {
	$("#search_results").html("");
}

function updateSearchResults() {
    $("#search_input").keyup(function() {
        var searchbarInput = $(this).val().toLowerCase();
        doSearch(searchbarInput);
    });
}

function doSearch(searchbarInput) {
    results = [];
    if (searchbarInput != "") {
        $.each(searchJSON, function(t,n) {
			var params = [n.title, n.href, n.date];
			var i = n.title.toLowerCase();
			var j = n.category.toLowerCase();
			var k = n.tags.toLowerCase();
			var m = n.difficulty.toLowerCase();
			if(i.indexOf(searchbarInput) !== -1) {
				results.push(params);
			}
			else if(j.indexOf(searchbarInput) !== -1) {
				results.push(params);
			}
			else if(k.indexOf(searchbarInput) !== -1) {
				results.push(params);
			}
			else if(m.indexOf(searchbarInput) !== -1) {
				results.push(params);
			}
        });
    }
	printResults();
}

function printResults() {
    var e = $("#search_results");
    e.html("");
    e.html(function() {
        if (results.length == 0)
        {
            e.append('<li><a style="color: #999; word-wrap: break-word; white-space: normal" href="#">No results found</a></li>');
        }
        else
        {
            $.each(results, function(t, n) {
            e.append('<li><a style="color: #999; word-wrap: break-word; white-space: normal" href="' + n[1] + '">' + n[0] + '</a></li>');
            });
        }
    });
}

function checkTextField() {
    if ( searchInputIsFilled() ) { showSearchResults(); }
    else { hideSearchResults(); }
}

function searchInputIsFilled() {
	return $('#search_input').val() != ""
}

function showSearchResults() {
	$('#search_results').show();
}

function hideSearchResults() {
	$('#search_results').hide();
}

$(document).ready(function() {
    getSearchJSON();
	clearResultsList();
	updateSearchResults();
});

$(document).mouseup(function(e) {
    var container = $("#search_results");
    if ( !container.is(e.target) && container.has(e.target).length === 0 ) {
		container.hide();
	}
});