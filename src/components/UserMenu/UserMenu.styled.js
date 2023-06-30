import  styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
export const UserName = styled.p`
    font-weight: 700;
`;
export const BtnLogout = styled.button`
     width: 80px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: rgba(104, 48, 109, 0.274);
    border-radius: 3px;
    border-color: rgba(164, 91, 233, 0.404);
    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),
        0 2px 8px rgba(104, 48, 109, 0.274);

        &:hover {
            background-color: rgba(68, 38, 97, 0.855);
        }
`;


