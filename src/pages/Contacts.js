import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components';
import { ContactsForm } from 'components/';
import { fetchContacts } from 'redux/Contacts/operations';
import { selectLoading } from 'redux/Contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactsForm/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}