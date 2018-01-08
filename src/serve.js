let ref = firebase.database().ref('rootRef/posts')

function createArticle(title, date, key, text) {
	const root = $('#posts');

	let str = `<section class="hero is-white is-bold is-small promo-block">
			<div class="hero-body">
			<div class="container">
			<h1 class="title"> 
			<a href=pages/post.html?postId=${key}>
			${title}
			</a>
			</h1>
			<h2 class="subtitle">
			Written on ${date}
			</h2>
			</div>
			</div>
			</section>`

	root.prepend(str)
}

ref.once('value', function(snapshot) {
	$('#loadingBar').addClass('is-hidden');
	
	snapshot.forEach(function(child) {
		createArticle(child.val().title, child.val().date, child.key, child.val().content)
	})
})