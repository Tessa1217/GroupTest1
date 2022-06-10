document.addEventListener('DOMContentLoaded', mainFnc);

function mainFnc() {
	const API_KEY = 'api_key=e51d70c65b46eb8bd60cafccc9325e8b';
	const BASE_URL = 'https://api.themoviedb.org/3';
	const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
	console.log(API_URL);
	
	let tbody = document.querySelector('#movielist');
	
	function getMovies(url) {
		fetch(url)
			.then(response => response.json())
			.then(data => data.results)
			.then(list => {
				list.forEach((obj) => {
					//let tr = makeTr(obj);
					//tbody.append(tr);
					makeCard(obj);
				})
			})
			.catch(err => console.log(err));
	}
	
	// Table 형식
	function makeTr(obj) {
		let tr = document.createElement('tr');
		console.log(obj);
		for (let field in obj) {
			if (field == 'original_title' || field == 'id' || field == 'overview') {
				let td = document.createElement('td');
				td.innerText = obj[field];
				tr.append(td);
				} else if (field == 'poster_path') {
					let img = document.createElement('img');
					let src = "https://image.tmdb.org/t/p/w200";
					img.setAttribute('src', src + obj[field]);
					let td = document.createElement('td');
					td.append(img);
					tr.append(td);
				}
		}
		return tr;
	}
	
	// 카드 형식 (Grid)
	function makeCard(obj) {
		let div = document.createElement('div');
		div.setAttribute('class', 'card-item');
		for (let field in obj) {
			if (field == 'original_title') {
				let title = document.createElement('h3');
				title.innerText = obj[field];
				div.append(title);
			} else if (field == 'id') {
				let id = document.createElement('p');
				id.innerText = obj[field];
				div.append(id);
			} else if (field == 'overview') {
				let overview = document.createElement('p');
				overview.innerText = obj[field];
				div.append(overview);
			} else if (field == 'poster_path') {
				let p = document.createElement('p');
				p.setAttribute('id', 'image');
				let img = document.createElement('img');
				let src = "https://image.tmdb.org/t/p/w200";
				img.setAttribute('src', src + obj[field]);
				p.append(img);
				div.append(p);	
			}
		}
		document.querySelector('.card-container').append(div);
	}
	
	getMovies(API_URL);
	
}