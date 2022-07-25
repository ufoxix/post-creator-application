import React, {useState} from 'react';

const Header = () => {
    const [dynamicTitle, setDynamicTitle] = useState('Hello World');

    return (
        <div>
            <h1>{dynamicTitle}</h1>
            <input
                type="text"
                value={dynamicTitle}
                onChange={event => setDynamicTitle(event.target.value)}
            />
        </div>
    );
};

export default Header;
