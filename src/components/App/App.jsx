import AuthSection from 'components/AuthSection/AuthSection';
import Description from 'components/Description/Description';

import styled from '@emotion/styled';

export const App = () => {
    return (
        <div
        // style={{
        //     height: '100vh',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     fontSize: 40,
        //     color: '#010101',
        // }}
        >
            <AuthSection />
            <Container>
                <Description />
            </Container>
            {/* React homework template */}
        </div>
    );
};

const Container = styled.div`
    width: 1209px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0 auto;
`;
