import styled from 'styled-components';

export const AddWrapper = styled.div`
    min-height: calc(1000px - 22rem);
    background: rgb(252, 212, 125); 
`;

export const FormWrapper = styled.form`
    margin: 0 2rem;
    padding: 0;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: rgb(255, 250, 231);
    border: 1px solid rgb(225, 173, 71);
    border-radius: 4rem;
`;

export const ClassArea = styled.div`
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    color: rgb(225, 173, 71);
    border-bottom: 1px solid rgb(225, 173, 71);
`;

export const ClassInput = styled.input`
    height: 3rem;
    width: calc(100% - 15rem);
    font-size: 2rem;
    border: 0px;
    background: rgb(255, 250, 231);
    color: rgb(225, 173, 71) ;
`;

export const ContentArea = styled.div`
    height: 22rem;
    display: flex;
    align-content: flex-start;
    line-height: 5rem;
    font-size: 2rem;
    color: rgb(225, 173, 71);
`;

export const ContentInput = styled.textarea`
    height: 20rem;
    width: calc(100% - 15rem);
    line-height: 4rem;
    font-size: 2rem;
    border: 0px;
    background: rgb(255, 250, 231);
    color: rgb(225, 173, 71) ;
`;

export const Text = styled.label`
    margin: 0 2rem;
`;

export const SubBtn = styled.button`
    height: 5rem;
    width: calc(100% - 4rem);
    line-height: 5rem;
    font-size: 2rem;
    margin: 2rem;
    background: rgb(233, 156, 104);
    border: 1px solid rgb(233, 156, 104);
    border-radius: 2rem;
    color: white;
`;