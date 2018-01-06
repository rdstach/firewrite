const rootRef = firebase.database().ref('rootRef'),
	  postsRef = rootRef.child('posts');

function writePost(argument) {
	let title = $('#title').val(),
	rawContent = $('#content').val(),
	content = markdown.toHTML(rawContent);

	let obj = {
		title,
		content
	}

	postsRef.push().set(obj)

	return alert("Succesfully posted.")
}
