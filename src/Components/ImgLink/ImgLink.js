import React from 'react';
import  './imglink.css';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';

const prompt = 'Please enter the picture\'s link'
const ImgLink = ({onUrlChange,onUpload}) =>{
    return (
        <div className='cus-h'>
            <span >
                <input className='inputLine shadow-1' onChange={onUrlChange} placeholder={prompt} onFocus={(e) => e.target.placeholder=''}></input>
            </span>
            <span className='ml2'>
                <Button  variant='contained' color='default'  size='small' onClick={onUpload }>Upload
                    <CloudUploadIcon className='UploadIcon' />
                </Button>
            </span>
        </div>
    );
}

export default ImgLink;