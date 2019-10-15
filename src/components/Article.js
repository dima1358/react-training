import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.state.isOpen !== nextState.isOpen
	// }

	componentWillMount() {
		console.log("---", "mounting")
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log("---", 'will receive props')
	// 	if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState ({
	// 		isOpen: nextProps.defaultOpen
	// 	})
	// }

	componentWillUpdate() {
		console.log('---', 'will update')
	}

	render () {
		const {article, isOpen, onButtonClick} = this.props
		const body = isOpen && <section>{article.text}</section>
	 	return (
	    	<div className="hello" style={{color: "red"}}>
	    		<h2 onClick = {this.incrementCounter}>
	    			{article.title}
	    			clicked {this.state.count}
	    			<button onClick = {onButtonClick}>
	    			{isOpen ? "close" : "open"}
	    			</button>
	    		</h2>
	    		{body}
	    		<h3>creation date: {(new Date(article.date)).toDateString()}</h3>
	    	</div>
	  	)
	}

	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
}

export default Article