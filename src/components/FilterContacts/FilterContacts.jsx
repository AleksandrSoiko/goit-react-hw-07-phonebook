import { Input, Label, Span } from './FilterContacts.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(updateFilter(e.currentTarget.value.toLowerCase().trim()));
    console.log(e.currentTarget.value);
  };
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" name="filter" onChange={handleChange} />
    </Label>
  );
};
