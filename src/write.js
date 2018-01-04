const rootRef = firebase.database().ref(),
	  ref = rootRef.child('posts');

function writePost(argument) {
	let title = $('#title').val(),
		content = $('#content').val();

	let obj = {
		title,
		content
	}

	ref.push().set(obj)

	return alert("posted")
}