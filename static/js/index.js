/*
	The function below adds a 'click' event listener to the
	<li> items in the navbar menu. The code adds the 'active'
	class to li items which are clicked and removes the 'active'
	class from the remaining. The 'active' class adds a background-color 
	to the li item which is clicked for better visibility. 
*/
$(".menulist").on('click', function() {
    var idOfElementClicked = $(this)[0].id;
    $('#' + idOfElementClicked).addClass('active');
    var children = $(this)[0].parentNode.children;
    for (var i = 0; i < children.length; i++) {
        var childId = children[i].id;
        if (childId !== idOfElementClicked) {

            $('#' + childId).removeClass('active');
        }
    }
})