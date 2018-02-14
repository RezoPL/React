var movies = [
	{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        pict: './plakat/Harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        pict: './plakat/krol.jpg'
    },
    {
    	id: 3,
    	title: 'Riddick',
    	desc: 'Furianin na przeklętej planecie',
    	pict: './plakat/Riddick.jpg'
    },
    {
    	id: 4,
    	title: 'Terra Nova',
    	desc: 'Serial o śmiałkach chcących zbudować cywilizacje od nowa',
    	pict: './plakat/Terra.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.pict})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));