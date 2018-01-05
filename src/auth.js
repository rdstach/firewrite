const authRef = rootRef.child('auth')

function logIn(username, password) {
	authRef.once('value', function(snapshot) {
		let un = snapshot.val().username,
			pw = snapshot.val().password;

		if (username == un && password == pw) {
			alert('Successfully logged in.')

			$('#loginSection').addClass('is-hidden')
			$('#writeSection').removeClass('is-hidden')

			authRef.update({
				logged_in: true
			})
		} else {
			alert('Login failed.')
			const reload = window.location.reload(true);

			return reload;
		}
	})
}

function callLogin(argument) {
	let username = $('#usernameLogin').val();
	let password = $('#passwordLogin').val();
	
	logIn(username, password)
}

function logOut() {
	$('#writeSection').addClass('is-hidden')
	$('#loginSection').removeClass('is-hidden')

	authRef.update({
		logged_in: false
	})
}