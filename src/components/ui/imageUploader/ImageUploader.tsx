import React, { useRef } from 'react';
import addImageIcon from '../../../assets/images/BlackCross.svg';
import styles from './imageUploader.module.css';
import {convertBase64} from "../../../helpers/helpers";

interface ImageUploaderProps {
  handleFileChange: (file: any) => void;
}

function ImageUploader({handleFileChange} :ImageUploaderProps) {
    const imageRef = useRef() as React.RefObject<HTMLInputElement>;

    const handleClick = () => {
        imageRef.current && imageRef.current.click();
    };

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];

            const convertedImage = await convertBase64(file);

            handleFileChange(convertedImage);

            imageRef.current && (imageRef.current.value = '');
        }
    };

    return (
        <div className={styles.uploadFileContainer}>
            <button className={styles.fileUploader}
                    onClick={handleClick}
            >
                <img src={addImageIcon} alt={addImageIcon} />
                <input
                    ref={imageRef}
                    type="file"
                    accept="image/*"
                    style={{display:'none'}}
                    onChange={onFileChange}
                />
            </button>
        </div>
    )
}

export default ImageUploader;
