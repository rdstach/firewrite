const rootRef = firebase.database().ref('rootRef'),
	postsRef = rootRef.child('posts'),
	currentDate = moment().format('MMMM D, YYYY');

function writePost(argument) {
	let title = $('#title').val(),
	rawContent = $('#content').val(),
	mdContent = markdown.toHTML(rawContent);

	let obj = {
		title,
		rawContent,
		content: mdContent,
		date: currentDate
	}

	postsRef.push().set(obj)

	return alert("Succesfully posted.")
}
