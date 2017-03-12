import React from 'react';
import classNames from 'classNames';

class PaperFoldItem extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        collapse:true,
        calculatedHeight:null
      }
   }

   componentDidMount() {
     this.setState({
       calculatedHeight:this.comp.offsetHeight
     });
   }

   render() {
     return (
       <div style={{
         height:this.props.isOpen ? (this.state.calculatedHeight ? this.state.calculatedHeight : '100%') : '0px'
       }} className={classNames({
           "paperfold-parent__fold--up": (!this.props.isOpen && this.props.index % 2 === 0),
           "paperfold-parent__fold--down": (!this.props.isOpen && this.props.index % 2 !== 0)
         },"paperfold-parent")}>
         <div ref={ref => this.comp = ref} className={classNames(this.props.className, "paperfold-child")}>
           {this.props.children}
         </div>
       </div>
    );
   }
}

PaperFoldItem.propTypes = {
  role:React.PropTypes.string,
  isOpen:React.PropTypes.bool,
  index:React.PropTypes.number
};

PaperFoldItem.defaultProps = {
  role:'item',
  isOpen:true
};

export default PaperFoldItem;
