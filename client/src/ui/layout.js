import styled from 'styled-components';

/* Color Variables */
const LIGHT_GREY = '#DCDCDC';

export const NavBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 5rem -8px;
    width: 100%;
    height: 60px;
    position: top;
    padding 5px;
    border-bottom: 1px solid grey;
`;

export const NavItem = styled.div`
    margin: 0 10px 0 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    border: 1px solid ${LIGHT_GREY};
    border-radius: 5px;
    padding: 1rem;
`;

export const CardTitle = styled.div`
    width: 100%;
    text-align: center;
    padding: 5px;
    border-bottom: 1px solid ${LIGHT_GREY};
`;

export const CardBody = styled.div`
    padding: 5px;
`;