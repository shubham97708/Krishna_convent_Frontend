import React from "react";
/* global google */


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.state = {
      placceess: ''
    }
  }

  componentDidMount() {
    // this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, {
    //   "types": ["geocode"]
    // });


    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, {
      "types": ["address"]
    });


    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }



   componentShouldUpdate() {
    this.setState({
      placceess: this.props.add
    })
  }
 


  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    // this.props.set(place)
    this.setState({
      placceess: place
    })
    // this.props.onPlaceLoaded(place);
    this.props.alerr(place,this.props.index)


  }






  componentDidUpdate(prevProps, prevState) {
    if(prevProps.add!==this.props.add){
      //Perform some operation here
     console.log(this.props.add)
   // alert(this.props.add)
      this.setState({
        placceess: this.props.add
      })
    }
  }






  render() {
    return (<input ref = {
        this.autocompleteInput
      }
      id = "autocomplete"
      placeholder = ""
      type = "text"
      style={{width:"100%",borderRadius:"5%" ,borderStyle:'none',textAlign:'center'}}
      >
        
      </input>
    );
  }
}

export default SearchBar;