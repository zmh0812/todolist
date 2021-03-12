import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    min-width: 40rem;
    background: rgb(252, 212, 125);
`;

export const Title = styled.div`
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 2rem;
    color: rgb(225, 173, 71);
    
    .icon1 {
        display: block;
        position: absolute;
        top: 0;
        left: 1rem;
        font-size: 2rem;
    }
    .icon2 {
        display: block;
        position: absolute;
        top: 0;
        right: 1rem;
        font-size: 2rem;
    }
`;

export const Logo = styled.div`
    height: 14rem;
    line-height: 14rem;
    text-align: center;
    color: rgb(255, 250, 231);

    .icon3 {
        font-size: 8rem;
    }
    .icon4 {
        font-size: 10rem;
    }
    .icon5 {
        font-size: 5rem;
    }
`;

export const Date = styled.div`
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    color: rgb(223, 149, 81);
`;