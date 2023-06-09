import {useState} from 'react';
import './App.css';
//import { Component } from 'react';
import UserInfo from './components/userInfo';
import SearchBar from './components/searchBar';


const App = () => {

  /* useState hook - it gives u the ability 
    to encapsulate local state in a functional component
  */
    /*  useState returns u an array */

    const [searchKey, setsearchKey] = useState('')  //[val, setVal] //gargi

    console.log("searchText------",searchKey)

    const onUserSearch=(event)=>{
      const searchKey= event.target.value.toLocaleLowerCase()
      setsearchKey(searchKey)
    }

  return (
    <div className="App">
      <h1> my first functional component</h1>
      <p> bla bla</p>
      <SearchBar searchType="Search" onSearchHandler={onUserSearch} className="searchBar" placeHolder="Search for your user"/>
    </div>

  )
  

}
/* class App extends Component {
  constructor(){
    super()
    this.state={
      userDetails : [],
      searchText: "" 

    }
  }

  componentDidMount(){
    fetch("https://reqres.in/api/users/")
    .then(res=>res.json())
    .then(users=>this.setState(()=>{
      return {userDetails:users.data}
    }))
  }

  onUserSearch=(event)=>{
    const searchKey= event.target.value.toLocaleLowerCase()
    console.log("searchKey---",searchKey)
    this.setState(()=>{
      return {searchText:searchKey}
    })

  }

  render(){
    console.log("this.state.userDetails",this.state.userDetails)
    const filteredUserData= this.state.userDetails.filter((user)=>{
      return user.first_name.toLocaleLowerCase().includes(this.state.searchText) ||
      user.last_name.toLocaleLowerCase().includes(this.state.searchText)

      

    })
   
    const newText="SearchBar"
    return (
      <div className="App">

        <h1 className="title" style={{fontSize: '40px'}}>My User App</h1>
        
      
        <SearchBar searchType="Search" onSearchHandler={this.onUserSearch} className={newText} placeHolder="Search for your user"/>
     
        <UserInfo userData={filteredUserData}/>
       
      </div>
    );

  }
 
}


 */
export default App;