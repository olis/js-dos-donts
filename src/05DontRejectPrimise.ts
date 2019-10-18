import fetch from 'node-fetch';

// Schlecht:
fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=TypeScript&format=json")
	.then(
		(result) => {
			console.group("-----> RESPONSE");
			console.log(result);
			result.json()
				.then(
					(result) => {
						console.group("------> JSON");
						console.log(result);
					},
					(error) => {
						console.log(error);
					});;
		},
		(error) => {
			console.log(error);
		}
	)

// Nicht ganz so schlecht:
fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=TypeScript&format=json")
	.then(
		(result) => {
			console.group("-----> RESPONSE");
			console.log(result);
			return result.json();
		},
		(error) => {
			console.log(error);
		}
	).then(
		(result) => {
			console.group("------> JSON");
			console.log(result);
		},
		(error) => {
			console.log(error);
		});

Richtig:
fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=TypeScript&format=json")
	.then(
		result => {
			console.group("-----> RESPONSE");
			console.log(result);
			return result.json();
		}
	).then(
		result => {
			console.group("------> JSON");
			console.log(result);
		}
	).catch(error => {
		console.log(error);
	});
