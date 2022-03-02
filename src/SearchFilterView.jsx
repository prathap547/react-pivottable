import React from 'react';

class SearchFilter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }


  onSearchChange(s){
    let closeIcon = document.querySelector('.close-icon');
    if (s.target.value.length > 1) {
      closeIcon.classList.add('close-icon-show');
    } else if (document.querySelector('.close-icon-show')) {
      closeIcon.classList.remove('close-icon-show');
    }
    if(s.target.value && s.target.value.length > 0) {
      this.props.onSearchChange(s.target.value)
    } else {
      this.props.onSearchChange(document.querySelector('.pvtSearch').value);
    }

  }

  clearSearch(evt) {
    if(evt.target.value && evt.target.value.length > 0) {
      //evt.target.value = "";
    } else {
      document.querySelector('.pvtSearch').value = "";
    }

  }
  handleKeyUp(evt){
      let code = evt.charCode || evt.keyCode;
      if (code === 27) {
        this.clearSearch(evt);
        this.onSearchChange(evt);
      }
  }
  handleOnChange(evt){
      this.onSearchChange(evt)
  }
  handleClose(evt){
      this.clearSearch(evt);
      this.onSearchChange(evt);
  }

  render() {
    return (
      <div>
        <div className="col-md-12 pull-left">
          <input
            value={this.props.searchValue}
            className= "pvtDropdownValue pvtDropdownCurrent pvtSearch"
            placeholder= "Search"
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange= {this.handleOnChange.bind(this)}>
          </input>
          <button className="close-icon" type="reset" onClick={this.handleClose.bind(this)}>
          </button>
        </div>        
      </div>
    );
  }

}

export default SearchFilter;