
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import {Filter} from '../components/Filter/Filter'
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { fetchContacts } from '../redux/Contacts/operations';
import { selectIsLoading } from '../redux/Contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   return (
    <div>
      {/* <Helmet> */}
        <title>Your contacts</title>
      {/* </Helmet> */}
       <ContactsForm />
       <Filter/>
      <div>{isLoading && 'Request in progress...'}</div>
       <ContactsList />
       
    </div>
  );
}