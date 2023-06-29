import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, TextItem, BtnDelete } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
 
export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const onDeleteContact = () => {
        dispatch(deleteContact(id));
    };

    return (
        <ListItem key={id}>
            <TextItem>{name}: {number}</TextItem>
            <BtnDelete type='button' onClick={(onDeleteContact)}>Delete</BtnDelete>
        </ListItem>
    );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};