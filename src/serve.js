let ref = firebase.database().ref('rootRef/posts')

function createArticle(title, date, key, text) {
	const root = $('#posts');

	let str = `<div class=\"card article\"> \
	            <div class=\"card-content\"> \
	              <div class=\"media\"> \
	                <div class=\"media-content media-content-left\" align=\"left\"> \
	                  <p class=\"title article-title\"><a href=post.html?postId=${key}>${title}</a></p> \
	                  <p class=\"subtitle is-6 article-subtitle\"> \
	                    Written on ${date} \
	                  </p> \
	                </div> \
	              </div> \
	            </div> \
	          </div>`;

	root.prepend(str)
}

ref.once('value', function(snapshot) {
	$('#loadingBar').addClass('is-hidden');
	
	snapshot.forEach(function(child) {
		createArticle(child.val().title, child.val().date, child.key, child.val().content)
	})
})