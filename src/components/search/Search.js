import React, { useState, useEffect } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [amount, setAmount] = useState(15);
  const [images, setImages] = useState([]);
  const apiUrl = 'https://pixabay.com/api';

  useEffect(() => {
    if (searchText === '') {
      setImages([]);
    } else {
      axios
        .get(
          `${apiUrl}/?key=${process.env.REACT_APP_API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err));
    }
  }, [searchText, amount]);

  const onTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onAmountChange = (e, index, value) => setAmount(value);

  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={onTextChange}
        floatingLabelText="Search For Images"
        fullWidth={true}
      />
      <br />
      <SelectField
        name="amount"
        floatingLabelText="Amount"
        value={amount}
        onChange={onAmountChange}
      >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
      </SelectField>
      <br />
      {images.length > 0 ? (
        <ImageResults key={images.id} images={images} />
      ) : null}
    </div>
  );
};

export default Search;
