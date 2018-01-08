const ref = firebase.database().ref('rootRef/posts/')
const print = console.log;

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

function insertArticle(ref) {
	const root = $('#posts');
	let title = ref.title,
		date = ref.date,
		content = ref.mdContent;

	let str = `<div class=\"card article\"> \
	            <div class=\"card-content\"> \
	              <div class=\"media\"> \
	                <div class=\"media-content has-text-centered\"> \
	                  <p class=\"title article-title\">${title}</p> \
	                  <p class=\"subtitle is-6 article-subtitle\"> \
	                    Written on ${date} \
	                  </p> \
	                </div> \
	              </div> \
	            <div class=\"content article-body\"> \
	              <p style=\"white-space: pre-line\"> \
	              	${content} \
	              </p> \
	              </div> \
	            </div> \
	          </div>`;

	root.prepend(str)
}

ref.once('value', function(snapshot) {
	$('#loadingBar').addClass('is-hidden');
	
	const postsRef = ref.child(postId)
	postsRef.once('value', function(snapshot) {
		insertArticle(snapshot.val())
	})
})