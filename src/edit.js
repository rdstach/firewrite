function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    let params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

const query = getQueryParams(document.location.search);
const postId = query.postId
const rootRef = firebase.database().ref('rootRef/posts'),
	postsRef = rootRef.child('posts/' + `${postId}`),
	print = console.log;

function writePost(title, content) {
	let title = $('#title').val(),
	rawContent = $('#content').val(),
	mdContent = markdown.toHTML(rawContent);

	let obj = {
		title,
		rawContent,
		mdContent,
	}

	postsRef.push().update(obj)

	return alert("Post has been succesfully updated.")
}

function insertContent(title, content) {
	$('#title').val(title)
	$('#content').val(content)

	newTitle = $('#title').val()
	newContent = $('#content').val()

	writePost(newTitle, newContent)
}

// ref.once('value', function(snapshot) {
	postsRef.once('value', function(snapshot) {
		insertContent(snapshot.val().title, snapshot.val().rawContent)
	})
// })