import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context'
import Demo02 from './Demo02';


export default function Demo01(prop) {
    return (
        <div>
            <h2>Demo01</h2>
            <ul>
                <Context.Consumer>
                    {
                        ({data}) => data.map((item)=><li key={item}>{item}</li>)
                    }
                </Context.Consumer>
            </ul>
            <Demo02/>
        </div>
    )
}
// Demo01.propTypes = {
//     name: PropTypes.string.isRequired
// }
// Demo01.defaultProps = {
//     name: 'tom'
// }