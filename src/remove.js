let ref = firebase.database().ref('rootRef/posts')

function createArticle(title, date, key, text) {
	const root = $('#postsSection');

	let str = `<section class="hero is-dark is-bold is-small promo-block">
			<div class="hero-body">
			<div class="container">
			<h1 class="title"> 
			<a href=post.html?postId=${key}>
			${title}
			</a>
			<i class="fa fa-fire"></i>
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
		// console.log(child.val())
	})
})