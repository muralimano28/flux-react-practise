<script type="text/jsx">
var TodoList = React.createClass({
    render:function(){
        var _mapfunction = function(itemtext){
            return <li>{itemtext}</li>
        }
        return(
            <div>
                <ul>{this.props.items.map(_mapfunction)}</ul>
            </div>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState:function(){
        return{
            items:[],
            nextItem:"",
            txt:""
        }
    },
    updateEverything:function(e){
        e.preventDefault();
        var _nextitem = this.props.items.concat([this.state.txt]);
        this.setState({
            items:_nextitem,
            txt:""
        });
    },
    updateText:function(e){
        this.setState({
            txt:this.e.target.value;
        });
    },
    
    render:function(){
        return(
            <div>
                <TodoList items={this.state.items} />
                <input type="text" onChange={this.updateText} value={this.state.txt} />
                <input type="button" onClick={this.updateEverything} />
            </div>
        )
    }
});
React.render(<TodoApp />,document.body);
</script>
