const rootRef = firebase.database().ref('rootRef'),
	postsRef = rootRef.child('posts');

function writePost(argument) {
	let title = $('#title').val(),
	rawContent = $('#content').val(),
	mdContent = markdown.toHTML(rawContent);

	let obj = {
		title,
		rawContent,
		content: mdContent
	}

	postsRef.push().set(obj)

	return alert("Succesfully posted.")
}
