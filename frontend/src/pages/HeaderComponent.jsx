import React,{Component} from 'react'

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return(
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/Login" className="navbar-brand">Home</a></div>
                    <div><a href="/Employees" className="navbar-brand">Employees</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent;