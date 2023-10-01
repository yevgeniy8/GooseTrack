
const CalendarTable = () => {
    return ( 
        <ul>
            <li></li>
        </ul>
     );
}
 
export default CalendarTable;

// const ContactList = () => {
//     const dispatch = useDispatch();
//     const contacts = useSelector(selectVisibleContacts);

//     const onDeleteContact = (id) => {
//         dispatch(DeleteContact(id));
//         showErrorMessage(`You have deleted a contact`);
//     };
    
//     return (
//     <List>
//             {contacts?.map(contact =>
//             (
//                 <li key={contact.id}>
//                     <ListItem>
//                         <p>{contact.name}: {contact.number}</p>
//                         <DeleteBtn type="button" onClick={() => onDeleteContact(contact.id)}>Delete</DeleteBtn>
//                     </ListItem>
//                 </li>
//             )
//             )}
//     </List>
// )}