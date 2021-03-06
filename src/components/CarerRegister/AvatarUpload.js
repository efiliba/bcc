﻿import React from 'react';
import Dropzone from 'react-dropzone';

const activeStyle = {
    borderStyle: 'solid',
    borderColor: 'green',
    backgroundColor: '#eee'
};

const rejectStyle = {
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: '#ffdddd'
};

const AvatarUpload = ({preview, handleAvatarSelected}) => (
    <Dropzone className='avatarContainer' activeStyle={activeStyle} rejectStyle={rejectStyle} onDrop={handleAvatarSelected} multiple={false} accept={'image/*'}>
        {preview
            ? <img src={preview}/>
            : <div className='avatarInstructions'>Drag and drop your avatar here, or click to select an image to upload.</div>
        }
    </Dropzone>
);

export default AvatarUpload;