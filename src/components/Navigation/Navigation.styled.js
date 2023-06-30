import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;

    &:hover {
            color: rgba(68, 38, 97, 0.855);
        }
`
