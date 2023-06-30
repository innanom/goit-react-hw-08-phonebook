import  styled  from '@emotion/styled';

export const Form = styled.form`
    width: 320px;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    color: rgb(68, 38, 97);
    color: rgb(68, 38, 97);

`;
export const InputForm = styled.input`
    width: 300px;
    height: 30px;
    border-color: rgba(164, 91, 233, 0.404);
    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),
        0 2px 8px rgba(104, 48, 109, 0.274);
`;
export const BtnLogin = styled.button`
    width: 150px;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: 600;
    background-color: rgba(104, 48, 109, 0.274);
    border-radius: 3px;
    border-color: rgba(164, 91, 233, 0.404);
    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),
        0 2px 8px rgba(104, 48, 109, 0.274);

        &:hover {
            background-color: rgba(68, 38, 97, 0.855);
        }
`;
