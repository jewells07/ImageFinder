import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const ImageResults = ({ images }) => {
  const [state, setState] = useState({
    open: false,
    currentImg: '',
  });

  const handleOpen = (img) => {
    setState({ open: true, currentImg: img });
  };

  const handleClose = () => {
    setState({ open: false });
  };

  let imageListContent;

  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {images.map((img) => (
          <GridTile
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridTile>
        ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }

  const actions = [
    <FlatButton label="Close" primary={true} onClick={handleClose} />,
  ];

  return (
    <div>
      {imageListContent}
      <Dialog
        actions={actions}
        modal={false}
        open={state.open}
        onRequestClose={handleClose}
      >
        <img src={state.currentImg} alt="" style={{ width: '100%' }} />
      </Dialog>
    </div>
  );
};

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
