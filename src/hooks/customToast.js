import { toast } from 'react-toastify';

const customToast = {
    success(msg, options = {}) {
        return toast.success(msg, {
            ...options,
            autoClose: false, // Don't close automatically
            closeButton: true, // Show close button
            // Other options...
        });
    },
    error(msg, options = {}) {
        return toast.error(msg, {
            ...options,
            autoClose: false, // Don't close automatically
            closeButton: true, // Show close button
            // Other options...
        });
    },
    info(msg, options = {}) {
        return toast.info(msg, {
            ...options,
            autoClose: false, // Don't close automatically
            closeButton: true, // Show close button
            // Other options...
        });
    },
};

export default customToast;
