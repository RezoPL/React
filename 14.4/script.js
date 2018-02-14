var movies = [{
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

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MoviePicture = React.createClass({
    propTypes: {
        pict: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('img', {src: this.props.pict})
        )
    }
});

var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
                React.createElement('li', { key: movie.id },
                React.createElement(MovieTitle, {}, movie.title),
                React.createElement(MovieDesc, {}, movie.desc),
                React.createElement(MoviePicture, { src: movie.pict })
            )
        )
    },
});


ReactDOM.render(element, document.getElementById('app'));