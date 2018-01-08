let postsRef = firebase.database().ref('rootRef/posts')

function createArticle(title, date, key, text) {
	const root = $('#postsSection');

	let str = `<section class="hero is-dark is-bold is-small promo-block" id="${key}">
			<div class="hero-body">
			<div class="container">
			<h1 class="title">
			${title}
			</h1>
			<h2 class="subtitle">
			Written on ${date}
			</h2>
			<br>
			<h1 class="title">
			<a class="button is-info" href="edit.html?postId=${key}">
			Edit Post
			</a>
			<a class="button is-danger" href="javascript:removePost('${key}')">
			Remove Post
			</a>
			</h1>
			</div>
			</div>
			</section>`

	root.prepend(str)
}

postsRef.once('value', function(snapshot) {
	$('#loadingBar').addClass('is-hidden');
	
	snapshot.forEach(function(child) {
		createArticle(child.val().title, child.val().date, child.key, child.val().content)
	})
})

function removePost(key) {
	let deletedPost = $('#' + `${key}`)
	deletedPost.addClass('is-hidden')
	return postsRef.child(key).remove()
}