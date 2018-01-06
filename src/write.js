const rootRef = firebase.database().ref('rootRef'),
	postsRef = rootRef.child('posts'),
	currentDate = moment().format('MMMM D, YYYY');

function writePost(argument) {
	let title = $('#title').val(),
	rawContent = $('#content').val(),
	content = markdown.toHTML(rawContent);

	let obj = {
		title,
		content,
		date: currentDate
	}

	postsRef.push().set(obj)

	return alert("Succesfully posted.")
}
