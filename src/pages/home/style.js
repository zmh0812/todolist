import styled from 'styled-components';

export const HomeWrapper = styled.div`
    min-width: 40rem;
    min-height: calc(1000px - 22rem);
    background: rgb(255, 250, 231);
`;

export const TodoWrapper = styled.div`
    margin: 0;
    padding: 0;
`;

export const TodoTitle = styled.div`
    height: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    color: rgb(223, 149, 81);
    text-indent: 2rem;
`;

export const TodoItem = styled.div`
    margin: 1rem 2rem;
    background: rgb(143, 224, 192);
    border-radius: 1rem;
`;

export const ItemClass = styled.p`
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    text-indent: 2rem;
    color: rgb(131, 93, 130);
    border-bottom: 1px solid white;
    position: relative;

    .icon {
        position: absolute;
        top: 0;
        right: 2rem;
        font-size: 2rem;
}
`;

export const DeleteBtn = styled.span`
    height: 5rem;
    line-height: 5rem;
    font-size: 1.5rem;
    text-decoration: underline;
    position: absolute;
    top: 0;
    right: 5rem;
`;

export const ItemContent = styled.p`
    margin: 0 2rem;
    line-height: 4rem;
    font-size: 2rem;
    color: white;
`;

export const CompleteWrapper = styled.div`
    margin: 0;
    padding: 0;
`;

export const CompleteTitle = styled.div`
    height: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    color: rgb(223, 149, 81);
    text-indent: 2rem;
`;

export const CompleteItem = styled.div`
    margin: 1rem 2rem;
    background: rgb(158, 212, 248);
    border-radius: 1rem;
`;