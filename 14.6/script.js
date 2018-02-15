var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Counter:' + " " + this.state.counter),
            React.createElement('button', { onClick: this.increment }, 'Increment'),
            React.createElement('button', { onClick: this.decrement }, 'Decrement')
        );
    },

    componentWillMount() {
        console.log('Wywołanie przed renderowaniem');
    },

    componentDidMount() {
        console.log('Wywołanie po uruchomieniu komponentu');
    },

    componentWillReceiveProps(nextProps) {
        console.log('Aktualizuje stan gdy komponent otrzyma nowe własności');
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log('powinna zwrócić true lub false, w zależności czy chcemy optymalizować aplikację');

        return true;
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('wywołanie jak WillMount przed renderem, przygotowuje na zmiany');
    },

    componentDidUpdate(prevProps, prevState) {
        console.log('jak DidMount wywoływana po update komponentu, jako argument przekazuje poprzednie props i state.');
    },

    componentWillUnmount() {
        console.log('do ostatnich porządków, jak usuwanie Timerów i Listenerów');
    }

});

var element = React.createElement('div', {},
    React.createElement(Counter),
);
ReactDOM.render(element, document.getElementById('app'));