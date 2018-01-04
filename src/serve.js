let ref = firebase.database().ref('posts')

function createArticle(title, text) {
	const root = $('#posts');

	let str = `<div class=\"card article\"> \
	            <div class=\"card-content\"> \
	              <div class=\"media\"> \
	                <div class=\"media-content has-text-centered\"> \
	                  <p class=\"title article-title\">${title}</p> \
	                  <p class=\"subtitle is-6 article-subtitle\"> \
	                    Written on October 7, 2017 \
	                  </p> \
	                </div> \
	              </div> \
	            <div class=\"content article-body\"> \
	              <p style=\"white-space: pre-line\"> \
	              	${text} \
	              </p> \
	              </div> \
	            </div> \
	          </div>`;

	root.append(str)
}

ref.once('value', function(snapshot) {
	$('#loadingBar').addClass('is-hidden');
	
	snapshot.forEach(function(child) {
		createArticle(child.val().title, child.val().content)
	})
})