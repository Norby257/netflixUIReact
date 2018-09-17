import React from 'react'; 

export default class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation" className="Navigation">
                <nav> 
                        <ul>
                                <li> Browse </li>
                                <li> My List </li>
                                <li> Top Picks </li>
                                <li> Recent </li>
                        </ul>



                </nav>
            </div>
        )
    }

}