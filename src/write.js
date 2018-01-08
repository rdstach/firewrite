const rootRef = firebase.database().ref('rootRef'),
	postsRef = rootRef.child('posts'),
	date = moment().format('MMMM D, YYYY');

function writePost(argument) {
	let title = $('#title').val(),
	rawContent = $('#content').val(),
	mdContent = markdown.toHTML(rawContent);

	let obj = {
		title,
		rawContent,
		mdContent,
		date
	}

	postsRef.push().set(obj)

	return alert("Succesfully posted.")
}
