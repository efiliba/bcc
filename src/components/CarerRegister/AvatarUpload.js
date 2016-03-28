import React from 'react';
import Dropzone from 'react-dropzone';

const AvatarUpload = ({avatar, handleAvatarSelected}) => (
    <Dropzone onDrop={handleAvatarSelected} multiple={false} accept={'image/*'}>
        {avatar
            ? <img src={avatar.preview}/>
            : <div>Drag and drop your avatar here, or click to select the image to upload.</div>
        }
    </Dropzone>
);

export default AvatarUpload;