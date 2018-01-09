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
	postsRef = rootRef.child(postId),
	print = console.log;

function writePost(title, content) {
	let updatedTitle = title,
	rawContent = content,
	mdContent = markdown.toHTML(rawContent);

	let obj = {
		rawContent,
		mdContent,
		title: updatedTitle
	}

	postsRef.update(obj)

	return alert("Post has been succesfully updated.")
}

function insertContent(title, content) {
	let currentTitle = $('#title').val(title),
	currentContent = $('#content').val(content);

	let newTitle = $('#title').val(),
	newContent = $('#content').val();
	// print(title)
	// print(content)
}

postsRef.once('value', function(snapshot) {
	insertContent(snapshot.val().title, snapshot.val().rawContent)
})

function callUpdatePost() {
	let editedTitle = $('#title').val(),
	editedContent = $('#content').val();

	writePost(editedTitle, editedContent)
}

function logOutEdit() {
	logOut()

	window.location.href = '../admin.html'
}