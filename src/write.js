const rootRef = firebase.database().ref(),
	  postsRef = rootRef.child('posts');

function writePost(argument) {
	let title = $('#title').val(),
	content = $('#content').val();

	let obj = {
		title,
		content
	}

	postsRef.push().set(obj)

	return alert("Succesfully posted.")
}
