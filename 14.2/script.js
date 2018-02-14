var movies = [
	{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        pict: '<img src="https://cdn4.dualshockers.com/wp-content/uploads/2017/11/Harry-Potter.jpg">'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
    	id: 3,
    	title: 'Riddick',
    	desc: 'Furianin na przeklętej planecie'
    },
    {
    	id: 4,
    	title: 'Terra Nova',
    	desc: 'Serial o śmiałkach chcących zbudować cywilizacje od nowa'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.pict)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));