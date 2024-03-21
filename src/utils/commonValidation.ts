import sanitizeHtml from 'sanitize-html';
import * as he from 'he';

const validatePhoneNumber = (phoneNumber: string): boolean => {
    // Remove all non-digit characters from the phone number
    const digitsOnly: string = phoneNumber.replace(/\D/g, '');
    // Check if the phone number is a valid length
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        return false;
    }
    // Check if the phone number is in a valid format
    const regex: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    return regex.test(phoneNumber);
};

const xssPrevent = (str: string, allowedTags: string[] = [], htmlEncode: number = 1): string => {
    if (htmlEncode === 1) {
        str = he.encode(str);
    }
    return sanitizeHtml(str, {
        allowedTags: allowedTags,
    })
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'");
};

const isValidDateString = (dateString: string): boolean => {
    
    // Check if the date string matches the format YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        return false;
    }
    // Check if the date is valid
    const isValidDate = !isNaN(Date.parse(dateString));
    console.log(dateString, isValidDate);
    return isValidDate;
};

const isValidTimeString = (timeString: string): boolean => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(timeString);
};

export { validatePhoneNumber, xssPrevent, isValidDateString, isValidTimeString };
