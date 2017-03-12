import React, { cloneElement } from 'react';
import PaperFoldItem from './PaperFoldItem';
import ValidComponentChildren from './ValidComponentChildren';
import './paperfold.scss';

class PaperFold extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        isOpen:true
      }
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.toggle = this.toggle.bind(this);
      this.extractChildren = this.extractChildren.bind(this);
      this.refineItem = this.refineItem.bind(this);
   }

   extractChildren() {
     const seen = {};
     this.incrementer = 0;
     return ValidComponentChildren.map(this.props.children, child => {
       if (child.props.role === 'item') {
         console.log(this.incrementer);
         return this.refineItem(child);
       }
       return child;
     });
   }

   toggle() {
     console.log('toggle');
     this.setState({
       isOpen:!this.state.isOpen
     });
   }

   refineItem(menu) {
     console.log(this.incrementer);
     const menuProps = {
       isOpen:this.state.isOpen,
       index:this.incrementer
     };
     this.incrementer = this.incrementer + 1;
     return cloneElement(menu, menuProps, menu.props.children);
   }

   open() {
     this.setState({
       isOpen:true
     });
   }

   close() {
     this.setState({
       isOpen:false
     });
   }

   render() {
     const children = this.extractChildren();
     return (
       <div className="paperfold">
         {children}
       </div>
    );
   }
}

PaperFold.propTypes = {
};

PaperFold.defaultProps = {
};

export default PaperFold;
