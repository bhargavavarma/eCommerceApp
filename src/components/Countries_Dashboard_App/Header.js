import React from 'react';
import { FaRegMoon } from "react-icons/fa";
import { PageContainer, Button } from './Css';

class Header extends React.PureComponent {

    render() {
        return (
            <PageContainer>
                <p>Where in the world?</p>
                <Button onClick={this.props.onChangeTheme}>
                    <FaRegMoon size={20}/>
                    {this.props.selectedTheme.displayText}
                </Button>
            </PageContainer>
        );
    }
}

export { Header };
