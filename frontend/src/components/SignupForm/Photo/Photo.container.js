import React from 'react';
import View from './Photo.view';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_NOT_SELECTED: 		'E_NOT_SELECTED',
	E_WRONG_IMAGE_TYPE: 	'E_WRONG_IMAGE_TYPE',
	E_TOO_BIG: 				'E_TOO_BIG'
}

export const errorStrings = defineMessages({
	E_NOT_SELECTED: 	"Please, choose a photo for your profile",
	E_WRONG_IMAGE_TYPE: 	"The selected file is supposed to be an image",
	E_TOO_BIG: 			"File size shouldn't exceed 5 MB",
})

const Container = ({
	/* values */
		fieldName, fieldLabel, isInvalid, errorMsg,
		isDisabled, isValid, validMsg, fileName, label,
	/* handlers */
		onChange
}) => pug`
	View(
		fieldName="photo"
		label=label
		fileName=fileName
		invalid=isInvalid
		errorMsg=errorMsg
		isDisabled=isDisabled
		valid=isValid
		validMsg=validMsg
		onChange=onChange
	)
`;

export default Container;