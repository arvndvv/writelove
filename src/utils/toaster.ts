import toast from "react-hot-toast";

const toastConfig: any = {
    duration: 2000,
    position: 'bottom-left',
    style: {
        borderRadius: '5px',
    },
};
const errorConfig: any = {
    ...toastConfig,
    style: {
        ...toastConfig.style,
        border: '2px solid #F92F60',
    }
}
const successConfig: any = {
    ...toastConfig,
    style: {
        ...toastConfig.style,
        border: '2px solid #00D26A',
    }
}

export const toaster = {
    success: (message: string) => toast.success(message, successConfig),
    error: (message: string) => toast.error(message, errorConfig),
    // warning: (message: string) => toast.warning(message, toastConfig),
}
